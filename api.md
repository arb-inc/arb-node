# Cases

Types:

- <code><a href="./src/resources/cases.ts">CaseCreateResponse</a></code>
- <code><a href="./src/resources/cases.ts">CaseListResponse</a></code>
- <code><a href="./src/resources/cases.ts">CaseViewResponse</a></code>

Methods:

- <code title="post /cases/create">client.cases.<a href="./src/resources/cases.ts">create</a>() -> CaseCreateResponse</code>
- <code title="post /cases/list">client.cases.<a href="./src/resources/cases.ts">list</a>({ ...params }) -> CaseListResponse</code>
- <code title="post /cases/view">client.cases.<a href="./src/resources/cases.ts">view</a>({ ...params }) -> CaseViewResponse</code>

# Evidence

## Uploads

Types:

- <code><a href="./src/resources/evidence/uploads.ts">UploadCreateResponse</a></code>
- <code><a href="./src/resources/evidence/uploads.ts">UploadListResponse</a></code>
- <code><a href="./src/resources/evidence/uploads.ts">UploadDeleteResponse</a></code>
- <code><a href="./src/resources/evidence/uploads.ts">UploadDownloadResponse</a></code>

Methods:

- <code title="post /evidence/uploads/create">client.evidence.uploads.<a href="./src/resources/evidence/uploads.ts">create</a>({ ...params }) -> UploadCreateResponse</code>
- <code title="post /evidence/uploads/list">client.evidence.uploads.<a href="./src/resources/evidence/uploads.ts">list</a>({ ...params }) -> UploadListResponse</code>
- <code title="post /evidence/uploads/delete">client.evidence.uploads.<a href="./src/resources/evidence/uploads.ts">delete</a>({ ...params }) -> string</code>
- <code title="post /evidence/uploads/download">client.evidence.uploads.<a href="./src/resources/evidence/uploads.ts">download</a>({ ...params }) -> UploadDownloadResponse</code>

# Filings

## Documents

Types:

- <code><a href="./src/resources/filings/documents.ts">DocumentCreateResponse</a></code>
- <code><a href="./src/resources/filings/documents.ts">DocumentUpdateResponse</a></code>
- <code><a href="./src/resources/filings/documents.ts">DocumentListResponse</a></code>
- <code><a href="./src/resources/filings/documents.ts">DocumentDeleteResponse</a></code>
- <code><a href="./src/resources/filings/documents.ts">DocumentPdfResponse</a></code>
- <code><a href="./src/resources/filings/documents.ts">DocumentSubmitResponse</a></code>
- <code><a href="./src/resources/filings/documents.ts">DocumentViewResponse</a></code>
- <code><a href="./src/resources/filings/documents.ts">DocumentWithdrawResponse</a></code>

Methods:

- <code title="post /filings/documents/create">client.filings.documents.<a href="./src/resources/filings/documents.ts">create</a>({ ...params }) -> DocumentCreateResponse</code>
- <code title="post /filings/documents/update">client.filings.documents.<a href="./src/resources/filings/documents.ts">update</a>({ ...params }) -> string</code>
- <code title="post /filings/documents/list">client.filings.documents.<a href="./src/resources/filings/documents.ts">list</a>({ ...params }) -> DocumentListResponse</code>
- <code title="post /filings/documents/delete">client.filings.documents.<a href="./src/resources/filings/documents.ts">delete</a>({ ...params }) -> string</code>
- <code title="post /filings/documents/pdf">client.filings.documents.<a href="./src/resources/filings/documents.ts">pdf</a>({ ...params }) -> DocumentPdfResponse</code>
- <code title="post /filings/documents/submit">client.filings.documents.<a href="./src/resources/filings/documents.ts">submit</a>({ ...params }) -> string</code>
- <code title="post /filings/documents/view">client.filings.documents.<a href="./src/resources/filings/documents.ts">view</a>({ ...params }) -> DocumentViewResponse</code>
- <code title="post /filings/documents/withdraw">client.filings.documents.<a href="./src/resources/filings/documents.ts">withdraw</a>({ ...params }) -> string</code>

# ServiceOfNotice

## Mailings

# Schemas

Types:

- <code><a href="./src/resources/schemas.ts">SchemaListResponse</a></code>

Methods:

- <code title="post /schemas/list">client.schemas.<a href="./src/resources/schemas.ts">list</a>() -> SchemaListResponse</code>
