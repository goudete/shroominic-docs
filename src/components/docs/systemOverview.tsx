

export default function SystemOverview() {

  return (
    <>
      <div className="col-span-4 md:col-span-3 overflow-y-auto">
        <div className="grid grid-cols-4 p-10">
          <div className="col-span-4 md:col-span-3">
            <div className="text-4xl font-extrabold mb-3">
              System Overview
            </div>

            <div className="text-3xl font-extrabold mb-3 mt-16">
              Functionality
            </div>
            <div className="text-[#94949c]">
              This codebase implements a backend API for Nux&apos;s platform to chain together AI workflows. It provides endpoints for:
            </div>
            <div className="text-[#94949c]">
              <ul className="list-disc ml-4">
                <li>Creating and managing data sources (documents, audio, etc)</li>
                <li>Defining and executing processing chains/workflows on those data sources</li>
                <li>Embedding data sources into vector spaces to enable semantic search</li>
                <li>Generating outputs like text, audio and eventually images/video from text prompts</li>
              </ul>
            </div>
            <div className="text-[#94949c] mt-5">
              Key capabilities include:
            </div>
            <div className="text-[#94949c]">
              <ul className="list-disc ml-4">
                <li>Ingesting data from URLs, YouTube, etc and processing/embedding it</li>
                <li>Building chains that connect together stages like search, text generation, text-to-speech</li>
                <li>Executing chains on demand or continuously with new data</li>
                <li>Storing data and metadata in MongoDB, vectors in Atlas Search</li>
              </ul>
            </div>

            <div className="text-3xl font-extrabold mb-3 mt-16">
              Dependencies
            </div>
            <div className="text-2xl font-extrabold mb-3 mt-8">
              Core
            </div>
            <div className="text-[#94949c]">
              <ul className="list-disc ml-4">
                <li>Flask - Python web framework</li>
                <li>MongoDB - Database for storing documents, audio, metadata</li>
                <li>MongoDB Atlas Search - For semantic vector search</li>
                <li>SentenceTransformers - Generating text embeddings</li>
              </ul>
            </div>

            <div className="text-2xl font-extrabold mb-3 mt-8">
              Data Ingestion
            </div>
            <div className="text-[#94949c]">
              <ul className="list-disc ml-4">
                <li>BeautifulSoup - HTML parsing</li>
                <li>PyPDF2 - PDF parsing</li>
                <li>PyTesseract - OCR</li>
                <li>Pytube - Downloading YouTube videos</li>
              </ul>
            </div>

            <div className="text-2xl font-extrabold mb-3 mt-8">
              ML Models
            </div>
            <div className="text-[#94949c]">
              <ul className="list-disc ml-4">
                <li>OpenAI API - GPT-3, Whisper</li>
                <li>ElevenLabs API - Text-to-speech</li>
              </ul>
            </div>

            <div className="text-2xl font-extrabold mb-3 mt-8">
              Infrastructure
            </div>
            <div className="text-[#94949c]">
              <ul className="list-disc ml-4">
                <li>AWS S3 - Object storage for generated audio</li>
                <li>Flask-SocketIO - Websockets for streaming chain output</li>
              </ul>
            </div>

            <div className="text-[#94949c] mt-8">
              The key external services used are the OpenAI and ElevenLabs APIs for large ML models like GPT-3 and Whisper. MongoDB and Atlas provide search and storage. The rest are standard Python data processing and web dev libraries.
            </div>
          </div>
          {/* <div className="col-span-1">
          <div>On this page</div>
        </div> */}
        </div>
      </div>
    </>
  );
}