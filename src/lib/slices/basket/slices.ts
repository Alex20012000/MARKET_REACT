import {createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../books/slices';

export interface BasketBook {
    book: Book,
    count: number,
};

interface SliceBasket {
    list: BasketBook[] | null,
};

const initialState: SliceBasket = {
    // list: [
    //     {
    //         "count": 1,
    //         "book": {
    //             "kind": "books#volume",
    //             "id": "fmevEAAAQBAJ",
    //             "etag": "tU9B5MpgzbM",
    //             "selfLink": "https://www.googleapis.com/books/v1/volumes/fmevEAAAQBAJ",
    //             "volumeInfo": {
    //                 "title": "4 adımda problem çözme",
    //                 "subtitle": "Psikoloji ve karar biliminden en iyi stratejileri kullanarak sorunları anlama ve çözme",
    //                 "authors": [
    //                     "Stefano Calicchio"
    //                 ],
    //                 "publisher": "Stefano Calicchio",
    //                 "publishedDate": "2023-02-17",
    //                 "description": "Problem çözme nedir ve nasıl çalışır? Kimler kullanabilir ve ne gibi sonuçlar doğurur? Problem çözme stratejileri insanların hayatlarında nasıl bir fark yaratabilir? Bu rehber, problem çözmenin basit tanımının ötesine geçmek ve en iyi problem çözücüler ile önde gelen kurumsal ve kurumsal kuruluşlar tarafından problemleri çözmek için hangi stratejilerin uygulandığını açıklamak için basit, açık ve kapsamlı bir şekilde yazılmıştır. El kitabı özellikle okuyucunun elinden tutmakta ve onu konunun kilit noktalarıyla tanıştırmaktadır: - problem çözmenin ne olduğu ve nasıl işlediği; - bir problemin nasıl doğru bir şekilde temsil edileceği ve çözüm hipotezlerinin nasıl doğru bir şekilde tanımlanacağı - içgörünün ne olduğu ve bu düşünme biçiminin problem çözmede nasıl bir rol oynadığı - deneyimli ve deneyimsiz problem çözücüleri birbirinden ayıran özellikler ve problem çözme becerilerinin nasıl geliştirilebileceği. Bu kılavuzda açıklanan en iyi problem çözme stratejilerini doğru bir şekilde kullanmayı öğrenmek, nasıl yapılacağını bildiğiniz sürece herkes için erişilebilir bir etkinlik haline gelebilir. Binlerce sayfalık teorik kılavuzlarla zaman kaybetmeyi bırakın ve basit, teşvik edici ve anlaşılır bir okuma ile gerçekten neyin önemli olduğunu keşfedin.",
    //                 "industryIdentifiers": [
    //                     {
    //                         "type": "ISBN_13",
    //                         "identifier": "9791222068008"
    //                     }
    //                 ],
    //                 "readingModes": {
    //                     "text": true,
    //                     "image": true
    //                 },
    //                 "pageCount": 87,
    //                 "printType": "BOOK",
    //                 "categories": [
    //                     "Business & Economics"
    //                 ],
    //                 "maturityRating": "NOT_MATURE",
    //                 "allowAnonLogging": false,
    //                 "contentVersion": "0.2.2.0.preview.3",
    //                 "panelizationSummary": {
    //                     "containsEpubBubbles": false,
    //                     "containsImageBubbles": false
    //                 },
    //                 "imageLinks": {
    //                     "smallThumbnail": "http://books.google.com/books/content?id=fmevEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //                     "thumbnail": "http://books.google.com/books/content?id=fmevEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    //                 },
    //                 "language": "id",
    //                 "previewLink": "http://books.google.ru/books?id=fmevEAAAQBAJ&printsec=frontcover&dq=subject:Architecture&hl=&as_pt=BOOKS&cd=1&source=gbs_api",
    //                 "infoLink": "https://play.google.com/store/books/details?id=fmevEAAAQBAJ&source=gbs_api",
    //                 "canonicalVolumeLink": "https://play.google.com/store/books/details?id=fmevEAAAQBAJ"
    //             },
    //             "saleInfo": {
    //                 "country": "RU",
    //                 "saleability": "FOR_SALE",
    //                 "isEbook": true,
    //                 "listPrice": {
    //                     "amount": 98.53,
    //                     "currencyCode": "RUB"
    //                 },
    //                 "retailPrice": {
    //                     "amount": 98.53,
    //                     "currencyCode": "RUB"
    //                 },
    //                 "buyLink": "https://play.google.com/store/books/details?id=fmevEAAAQBAJ&rdid=book-fmevEAAAQBAJ&rdot=1&source=gbs_api",
    //                 "offers": [
    //                     {
    //                         "finskyOfferType": 1,
    //                         "listPrice": {
    //                             "amountInMicros": 98530000,
    //                             "currencyCode": "RUB"
    //                         },
    //                         "retailPrice": {
    //                             "amountInMicros": 98530000,
    //                             "currencyCode": "RUB"
    //                         }
    //                     }
    //                 ]
    //             },
    //             "accessInfo": {
    //                 "country": "RU",
    //                 "viewability": "PARTIAL",
    //                 "embeddable": true,
    //                 "publicDomain": false,
    //                 "textToSpeechPermission": "ALLOWED",
    //                 "epub": {
    //                     "isAvailable": true
    //                 },
    //                 "pdf": {
    //                     "isAvailable": true
    //                 },
    //                 "webReaderLink": "http://play.google.com/books/reader?id=fmevEAAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
    //                 "accessViewStatus": "SAMPLE",
    //                 "quoteSharingAllowed": false
    //             }
    //         }
    //     },
    //     {
    //         "count": 1,
    //         "book": {
    //             "kind": "books#volume",
    //             "id": "fmCdDwAAQBAJ",
    //             "etag": "IbxTskocCio",
    //             "selfLink": "https://www.googleapis.com/books/v1/volumes/fmCdDwAAQBAJ",
    //             "volumeInfo": {
    //                 "title": "Walking in Athens",
    //                 "authors": [
    //                     "Nikos Vatopoulos"
    //                 ],
    //                 "publisher": "Metaichmio Publications",
    //                 "publishedDate": "2019-06-13",
    //                 "description": "Walking in Athens is a unique compilation of photos and accompanying articles, that came about from walking in various neighborhoods of the city. Mixed architectural styles, crumbling houses juxtaposed with concrete buildings, empty facades next to sound apartment blocks, this is a guide to a secret landscape. A compilation that speaks not just about architecture – it speaks about people coming and going, society changing, civilization evolving.",
    //                 "industryIdentifiers": [
    //                     {
    //                         "type": "ISBN_13",
    //                         "identifier": "9786180321289"
    //                     },
    //                     {
    //                         "type": "ISBN_10",
    //                         "identifier": "6180321280"
    //                     }
    //                 ],
    //                 "readingModes": {
    //                     "text": true,
    //                     "image": true
    //                 },
    //                 "pageCount": 158,
    //                 "printType": "BOOK",
    //                 "categories": [
    //                     "Architecture"
    //                 ],
    //                 "maturityRating": "NOT_MATURE",
    //                 "allowAnonLogging": false,
    //                 "contentVersion": "1.1.1.0.preview.3",
    //                 "panelizationSummary": {
    //                     "containsEpubBubbles": false,
    //                     "containsImageBubbles": false
    //                 },
    //                 "imageLinks": {
    //                     "smallThumbnail": "http://books.google.com/books/content?id=fmCdDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //                     "thumbnail": "http://books.google.com/books/content?id=fmCdDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    //                 },
    //                 "language": "en",
    //                 "previewLink": "http://books.google.ru/books?id=fmCdDwAAQBAJ&printsec=frontcover&dq=subject:Architecture&hl=&as_pt=BOOKS&cd=5&source=gbs_api",
    //                 "infoLink": "https://play.google.com/store/books/details?id=fmCdDwAAQBAJ&source=gbs_api",
    //                 "canonicalVolumeLink": "https://play.google.com/store/books/details?id=fmCdDwAAQBAJ"
    //             },
    //             "saleInfo": {
    //                 "country": "RU",
    //                 "saleability": "FOR_SALE",
    //                 "isEbook": true,
    //                 "listPrice": {
    //                     "amount": 896.95,
    //                     "currencyCode": "RUB"
    //                 },
    //                 "retailPrice": {
    //                     "amount": 807.26,
    //                     "currencyCode": "RUB"
    //                 },
    //                 "buyLink": "https://play.google.com/store/books/details?id=fmCdDwAAQBAJ&rdid=book-fmCdDwAAQBAJ&rdot=1&source=gbs_api",
    //                 "offers": [
    //                     {
    //                         "finskyOfferType": 1,
    //                         "listPrice": {
    //                             "amountInMicros": 896950000,
    //                             "currencyCode": "RUB"
    //                         },
    //                         "retailPrice": {
    //                             "amountInMicros": 807260000,
    //                             "currencyCode": "RUB"
    //                         }
    //                     }
    //                 ]
    //             },
    //             "accessInfo": {
    //                 "country": "RU",
    //                 "viewability": "PARTIAL",
    //                 "embeddable": true,
    //                 "publicDomain": false,
    //                 "textToSpeechPermission": "ALLOWED",
    //                 "epub": {
    //                     "isAvailable": true,
    //                     "acsTokenLink": "http://books.google.ru/books/download/Walking_in_Athens-sample-epub.acsm?id=fmCdDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    //                 },
    //                 "pdf": {
    //                     "isAvailable": true,
    //                     "acsTokenLink": "http://books.google.ru/books/download/Walking_in_Athens-sample-pdf.acsm?id=fmCdDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    //                 },
    //                 "webReaderLink": "http://play.google.com/books/reader?id=fmCdDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
    //                 "accessViewStatus": "SAMPLE",
    //                 "quoteSharingAllowed": false
    //             }
    //         }
    //     }
    // ],
    list: null
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBookInBasket(state, action: PayloadAction<BasketBook>) {
            const _list =  [...(state.list || []), action.payload];
            state.list = _list;
        },
        setBookCount(state, action: PayloadAction<{id: string, count: number}>) {
            state.list = state.list?.map((item) => {
                if (action.payload.id === item.book.id) {
                    return({
                        ...item, count: action.payload.count
                    })
                }
                return(item)
            }) || [];
        }
    },
});

export default basketSlice.reducer;
export const { addBookInBasket, setBookCount } = basketSlice.actions;