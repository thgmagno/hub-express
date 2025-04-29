export interface UrlShortenerFormState {
  data?: {
    url?: string
  }
  errors: {
    url?: string[]
    _form?: string
  }
}
