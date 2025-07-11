// structure.js
export const structure = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      S.documentTypeListItem('post').title('Posts'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !['post', 'category', 'author'].includes(item.getId())
      ),
    ]);
