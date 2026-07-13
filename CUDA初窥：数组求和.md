## 写在最前
#### *我肯定在幾百年前就說過愛你 -- 告五人*  
敲下这第一段文字的时候，我入门CUDA刚刚一周有余，而在这之前，距离我正式从C语言开始学习编程，已经过去了将近13年。那个时候我肯定一定也写过一段程序来解决数组求和，亦或许我并没有写过，只是在第一次接触“数组”、“循环”概念时瞥到了这个例子:
```c++
int arr[] = {10, 20, 30, 40, 50};
int sum = 0;
int length = sizeof(arr) / sizeof(arr[0]);

for (int i = 0; i < length; i++) {
    sum += arr[i];
}
```
工程最迷人的地方，也恰恰是最折磨人的地方是：许多看似简单的问题模型，在规模的驱动下，都会呈现出无法预料的复杂度，最终走向意想不到的演化。只可惜那时我手里只有一把小锤子，于是把数组求和当成了一个简单到甚至谈不上需要谈及“解决”二字的小问题。直到接触CUDA，我才重新意识到，这个问题远比想象中更有趣，此便是我写下本文的发心所在。
在CUDA的视角中，数组求和的第一个有趣之处在于，它其实并不是直觉上CUDA易于处理的那类问题。

## Text Formatting

Markdown makes it easy to format text. You can write in **bold**, *italic*, or ~~strikethrough~~. Combine them for ***bold italic*** text. Use `inline code` for technical terms.

## Lists

Unordered lists use dashes, asterisks, or plus signs:

- Import files from GitHub, Dropbox, or Google Drive
- Export to Markdown, HTML, or PDF
- Drag and drop files directly into the editor

Ordered lists are numbered automatically:

1. Write your markdown
2. Preview the rendered output
3. Export or save to the cloud

Nested lists work too:

- Cloud integrations
  - GitHub repositories
  - Dropbox folders
  - Google Drive files
  - OneDrive and Bitbucket
- Local features
  - Auto-save to browser storage
  - Image paste from clipboard

## Task Lists

- [x] Set up the editor
- [x] Write some markdown
- [ ] Connect a cloud service
- [ ] Export the finished document

## Links and Images

Link to any page with [inline links](https://dillinger.io) or use [reference-style links][dillinger].

Images use a similar syntax:

![Placeholder](https://placehold.co/600x200/2B2F36/35D7BB?text=Your+Image+Here)

[dillinger]: https://dillinger.io

## Blockquotes

> The art of writing is the art of discovering what you believe.
>
> — Gustave Flaubert

Blockquotes can contain other markdown elements:

> **Tip:** Use `Cmd+Shift+Z` to enter zen mode for distraction-free writing.

## Code

Fenced code blocks support syntax highlighting:

```javascript
function greet(name) {
  return `Hello, ${name}.`;
}

console.log(greet("world"));
```

```python
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a
```

## Tables

| Shortcut | Action |
|----------|--------|
| `⌘ ⇧ Z` | Toggle zen mode |
| `Escape` | Exit zen mode |
| `?` | Keyboard shortcuts |

Tables support alignment:

| Feature | Status | Notes |
|:--------|:------:|------:|
| Markdown editing | Active | Monaco-powered |
| Live preview | Active | Scroll-synced |
| Cloud sync | Available | 5 providers |
| PDF export | Available | Server-rendered |

## Footnotes

Dillinger supports extended markdown syntax including footnotes[^1] and definition lists.

[^1]: Footnotes appear at the bottom of the rendered preview.

## Math

Inline math: $E = mc^2$

Block equations:

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

---

*Your documents save automatically. Start writing.*
