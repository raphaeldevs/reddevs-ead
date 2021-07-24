# Get video thubnail

https://img.youtube.com/vi/<insert-youtube-video-id-here>/maxresdefault.jpg

# Lesson schema

```ts
type Lesson = {
  id: string
  title: string
  description?: string
  url: string
  createdAt: Date
}
```
