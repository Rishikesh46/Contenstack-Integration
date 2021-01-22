import Stack from "../stack";

export default function getAllBlogs(contentType) {
  const Query = Stack.ContentType(contentType).Query();
  return Query.toJSON()
    .find()
    .then(
      function success(result) {
        return result;
      },
      function error(err) {
        console.log(err);
        return err;
      }
    );
}
