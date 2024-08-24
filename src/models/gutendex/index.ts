import { Book } from '..'
/**refers the search queries for Gutendex*/
export type Params = {
    /**ids=1,2,3,4 -> number*/
    ids?: string
    /**copyright=false -> boolean | null */
    copyright?: string
    /**subjects=subject1,subject2,subject3*/
    subjects?: string
    /**languages=en,es,fr*/
    languages?: string
    /**mime_type=text%2F -> text%2Fplain%3Bcharset%3Dus-ascii*/
    mime_type?: string
    /**search=name-author%20book-title -> name author or book title searching*/
    search?: string
    /**sort=ascending -> ascending or descending order by downloads*/
    sort?: string
    /**topic=children -> keyword for subject or bookshelves*/
    topic?: string
    /**author_year_end=2000 -> end year of author*/
    author_year_end?: string
    /**author_year_start=2000 -> start year of author*/
    author_year_start?: string
}
export interface GutendexResponse {
    count: number
    next: string
    previous: string
    results: Book[]
}

/*

//just reference for now
// type BookFormat struct {
//     HTML     string `json:"text/html"`
//     EPUB     string `json:"application/epub+zip"`
//     Mobi     string `json:"application/x-mobipocket-ebook"`
//     RDF      string `json:"application/rdf+xml"`
//     JPEG     string `json:"image/jpeg"`
//     Octet    string `json:"application/octet-stream"`
//     Plain    string `json:"text/plain; charset=us-ascii"`
// }
response from gutendex
{
	"count": 1,
	"next": null,
  "previous": null,
  "results": [
    {
      "id": 1,
      "title": "The Declaration of Independence of the United States of America",
      "authors": [
        {
          "name": "Jefferson, Thomas",
          "birth_year": 1743,
          "death_year": 1826
        }
      ],
      "translators": [],
      "subjects": [
        "United States -- History -- Revolution, 1775-1783 -- Sources",
        "United States. Declaration of Independence"
      ],
      "bookshelves": [
        "American Revolutionary War",
        "Politics",
        "United States Law"
      ],
      "languages": [
        "en"
      ],
      "copyright": false,
      "media_type": "Text",
      "formats": {
        "text/html": "https://www.gutenberg.org/ebooks/1.html.images",
        "application/epub+zip": "https://www.gutenberg.org/ebooks/1.epub3.images",
        "application/x-mobipocket-ebook": "https://www.gutenberg.org/ebooks/1.kf8.images",
        "application/rdf+xml": "https://www.gutenberg.org/ebooks/1.rdf",
        "image/jpeg": "https://www.gutenberg.org/cache/epub/1/pg1.cover.medium.jpg",
        "application/octet-stream": "https://www.gutenberg.org/cache/epub/1/pg1-h.zip",
        "text/plain; charset=us-ascii": "https://www.gutenberg.org/ebooks/1.txt.utf-8"
      },
      "download_count": 2272
    }
  ]
}

// Deserializar el JSON en una estructura Response
    var response Response
    err := json.Unmarshal([]byte(jsonString), &response)
    if err != nil {
        fmt.Println("Error al decodificar JSON:", err)
        return
    }

    // Imprimir el primer libro de los resultados
    fmt.Printf("%+v\n", response.Results[0])
}
*/
