export interface ErrorRequest {
    error: Error;
}

export interface Error {
    code:     string;
    metadata: Metadata;
    msg:      string;
}

export interface Metadata {
    additionalProp1: AdditionalProp1;
}

export interface AdditionalProp1 {
}
