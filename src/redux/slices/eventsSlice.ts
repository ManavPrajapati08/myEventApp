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
    const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
    const response = await httpService.post<EventsApiResponse>(
      '/events-listing',
      {},
      headers,
    );

    if (!response.success) {
      return rejectWithValue(response.message || 'Failed to fetch');
    }

    return response.data.events;
  } catch (error) {
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
>('events/toggleFavorite', async eventId => {
  return { eventId };
});

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
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
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        const event = state.events.find(
          e => e.event_date_id === action.payload.eventId,
        );
        if (event) {
          event.isFavorite = event.isFavorite === 1 ? 0 : 1;
        }
      });
  },
});

export default eventsSlice.reducer;
