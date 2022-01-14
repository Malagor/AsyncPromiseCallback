import 'regenerator-runtime/runtime';
import '@/styles/index.scss';
import '@/js/cars';

// const el = document.querySelector('.row');

// const htmlPost = (post) => {
//   return `
//     <div class="card" style="width: 18rem;">
//       <div class="card-body">
//         <h5 class="card-title">${post.id}. ${post.title}</h5>
//         <p class="card-text">${post.body}</p>
//         <a href="#" class="btn btn-primary">Go somewhere</a>
//       </div>
//     </div>
//   `;
// };
//
// const addPost = (htmlString) => {
//   el.insertAdjacentHTML('beforeend', htmlString);
// };
//
// // const p1 = fetch('https://jsonplaceholder.typicode.com/posts/1').then((response) =>
// //   response.json()
// // );
// //
// // const p2 = fetch('https://jsonplaceholder.typicode.com/posts/2').then((response) =>
// //   response.json()
// // );
//
// const getPost = (id) => {
//   return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response) =>
//     response.json()
//   );
// };
//
// // Promise.all([p1, p2]).then((posts) => {
// //   posts.forEach((post) => addPost(htmlPost(post)));
// // });
//
// // Promise.race([p1, p2]).then((post) => {
// //   addPost(htmlPost(post));
// // });
//
// const onSubmit = async (event) => {
//   event.preventDefault();
//   const value = !isNaN(input.value) ? input.value : undefined;
//   input.value = '';
//   input.focus();
//
//   if (value !== undefined) {
//     getPost(value)
//       .then((post) => getPost(post.id + 5))
//       .then((post) => addPost(htmlPost(post)));
//
//     const post = await getPost(value);
//     const post2 = await getPost(post.id + 10);
//
//     if (post) {
//       addPost(htmlPost(post2));
//     }
//   }
// };
//
// const form = document.querySelector('#form');
// const input = form.querySelector('#postNumber');
// form.addEventListener('submit', onSubmit);
