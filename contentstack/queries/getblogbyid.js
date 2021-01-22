import Stack from "../stack";

export default function getEnteryById(entry_id) {
const Query = Stack.ContentType("blogrender").Entry(entry_id);
return Query.fetch()
.then(
function success(entry) {

return entry.toJSON();
},
function error(err) {

console.log(err);
return err;
}
)
.then(function success(result) {
return result;
});
} 