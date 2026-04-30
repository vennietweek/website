# Documents Folder

This folder contains downloadable PDFs like your resume, capstone projects, and research papers.

## Current Documents

### Resume/CV
- **Expected filename**: `Venessa_Tan_Resume.pdf`
- **Location**: Referenced in the Resume section with a download button
- **To add**: Drop your CV PDF here with the exact filename above

### Academic Projects
1. **Enhancing New Hire Onboarding with Retrieval-Augmented Generation.pdf**
   - GIC capstone project
   - Download button in the RAG Knowledge Assistant project card

2. **Exploring Multimodal Fusion for Enhanced Emotion Recognition.pdf**
   - ML research project
   - Featured in Academic Research section

3. **Morality in the Digital Age - Predictive Modelling on AITA Subreddit Posts.pdf**
   - ML research project
   - Featured in Academic Research section

## How to Add More Documents

1. **Add your PDF** to this `/public/documents/` folder
2. **Reference it in code** using `/documents/filename.pdf`

### Example: Adding a download button

```tsx
<Button asChild variant="outline">
  <a href="/documents/your-file.pdf" download>
    <Download className="mr-2 size-4" />
    Download Document
  </a>
</Button>
```

## Best Practices

- Use descriptive filenames (no spaces or special characters recommended)
- Keep file sizes reasonable (< 5MB preferred)
- PDFs should be optimized for web viewing
- Update this README when adding new documents
