import {createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InfoBooks {
    kind: string,
    totalItems: number,
}

export interface BookDTO extends InfoBooks {
    items: Book[]
}

export interface Book {
    id: string,
    volumeInfo?: {
        imageLinks?: {thumbnail?: string},
        authors?: string[],
        title?: string,
        averageRating?: number,
        ratingsCount?: number,
        description?: string,
    }
    saleInfo?: {
        listPrice?: {
            amount: number,
            currencyCode: string,
        }
    }
}

export enum Category {
    Architecture = 'Architecture',
    Art_Fashion = 'Art & Fashion',
    Biography = 'Biography',
    Business = 'Business',
    Crafts_Hobbies = 'Crafts & Hobbies',
    Drama = 'Drama',
    Fiction = 'Fiction',
    Food_Drink = 'Food & Drink',
    Health_Wellbeing = 'Health & Wellbeing',
    History_Politics = 'History & Politics',
    Humor = 'Humor',
    Poetry = 'Poetry',
    Psychology = 'Psychology',
    Science = 'Science',
    Technology = 'Technology',
    Travel_Maps = 'Travel & Maps',
}

interface SliceBooks {
    books: Book[] | null,
    kind: string | null,
    totalItems: number | null,
    category: Category,
    page: number,
    isLoading: boolean,
    error: string | null,
}

const initialState: SliceBooks = {
    books: null,
    kind: null,
    totalItems: null,
    category: Category.Architecture,
    page: 0,
    isLoading: false,
    error: null
};

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
        setCategory(state, action: PayloadAction<Category>) {
            state.category = action.payload;
        },
        setBooks(state, action: PayloadAction<Book[]>) {
            state.books = action.payload;
        },
        setInfo(state, action: PayloadAction<InfoBooks>) {
            state.totalItems = action.payload.totalItems;
            state.kind = action.payload.kind;
        },
    },
});

export default booksSlice.reducer;
export const { setBooks, setCategory, setPage, setInfo } = booksSlice.actions;
