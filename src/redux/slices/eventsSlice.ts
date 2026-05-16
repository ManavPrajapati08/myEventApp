import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { httpService } from '../../shared/services/httpService';
import { Event } from '../../types';

interface EventsState {
  events: Event[];
  isLoading: boolean;
  error: string | null;
}

const initialState: EventsState = {
  events: [],
  isLoading: false,
  error: null,
};

interface EventsApiResponse {
  success: boolean;
  message: string;
  data: {
    events: Event[];
    total: number;
  };
}

export const fetchEvents = createAsyncThunk<
  Event[],
  string | undefined,
  { rejectValue: string }
>('events/fetchEvents', async (token, { rejectWithValue }) => {
  try {
    console.log('========== FETCH EVENTS START ==========');
    console.log('🔑 Token received:', token);
    console.log('🔑 Token exists?', !!token);

    const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
    console.log('📋 Headers:', headers);

    console.log('🌐 Calling API: /events-listing');
    const response = await httpService.post<EventsApiResponse>(
      '/events-listing',
      {},
      headers,
    );

    console.log('📦 Full Response:', JSON.stringify(response, null, 2));
    console.log('✅ Response success field:', response.success);
    console.log('📝 Response message:', response.message);
    console.log('📊 Response data.events:', response.data.events);
    console.log('📊 Events length:', response.data.events?.length);

    if (!response.success) {
      console.log('❌ API returned success: false');
      console.log('❌ Error message:', response.message);
      return rejectWithValue(response.message || 'Failed to fetch');
    }

    console.log(
      '✅ SUCCESS! Returning data:',
      response.data.events.length,
      'events',
    );
    console.log('========== FETCH EVENTS END ==========');
    return response.data.events;
  } catch (error) {
    console.log('💥 EXCEPTION CAUGHT!');
    console.log('💥 Error:', error);
    console.log('💥 Error type:', typeof error);
    console.log(
      '💥 Error message:',
      error instanceof Error ? error.message : 'Unknown',
    );
    console.log('========== FETCH EVENTS FAILED ==========');

    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unknown error occurred');
  }
});

export const toggleFavorite = createAsyncThunk<
  { eventId: number },
  number,
  { rejectValue: string }
>('events/toggleFavorite', async (eventId, { rejectWithValue }) => {
  try {
    const response = await httpService.post<{
      status: boolean;
      message: string;
    }>('/toggle-favorite', { event_id: eventId.toString() });

    if (!response.status) {
      return rejectWithValue(response.message || 'Failed to toggle favorite');
    }

    return { eventId };
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unknown error occurred');
  }
});

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    clearEvents: state => {
      state.events = [];
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchEvents.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to fetch events';
      })
      .addCase(toggleFavorite.pending, state => {
        state.error = null;
      })
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        const event = state.events.find(
          e => e.event_id === action.payload.eventId,
        );
        if (event) {
          event.isFavorite = event.isFavorite === 1 ? 0 : 1;
        }
      })
      .addCase(toggleFavorite.rejected, (state, action) => {
        state.error = action.payload || 'Failed to toggle favorite';
      });
  },
});

export const { clearEvents } = eventsSlice.actions;
export default eventsSlice.reducer;
