<script setup lang="ts">
import { useQuery, useMutation } from '@tanstack/vue-query';
import { ref } from "vue";

const showItem = ref(false);
const newPost = ref({
    userid: Date.now(),
    title: "",
    content: ""
});
const url = "https://jsonplaceholder.typicode.com/posts";

const {isPending: blogsPending, isError: blogssError, data: blogsData, error: blogsErr} = useQuery({
    queryKey: ["blogs"], 
    queryFn: fetchBlogs
});

const thing = useMutation({mutationFn: addPost});
async function addPost(){
    console.log("newPost: ", newPost.value.title);
    const response = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newPost)
    } );
    
    if(!response.ok) {
        throw new Error("Network response was not ok");
    }
    
    return response.json();
};
const removePost = useMutation({
    mutationFn: deletePost,
    onSuccess: () => console.log("API confirmed delete")
    });
async function deletePost(id){
        const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
    } );

    if(!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
};
function handleBlogPostDelete(id){
    removePost.mutate(id);
    console.log("post deleted");
};
async function fetchBlogs(){
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
};
function handleTitleEdit(){};
function handleBlogPostEdit(){};

function handleSubmit(){
    thing.mutate();
    showItem.value = true;
    //check whether we are editing a post or creating a new one
    //if editing, call the PATCH function
    //if replacing existing post, call our PUT function
    //else POST new blog post
    //reset form by updating ref "newPost"
    //reset form status ref (editing/replacing/posting?)
};
</script>

<template>
    <div>
        <form class="my-form" v-on:submit.prevent="handleSubmit">
            <h2>Add a new post:</h2>
            <div class="input-container">
                <label for="blog-title">Post title:</label>
                <input name="blog-title" type="text" v-model="newPost.title">
            </div>
            <div class="input-container">
                <label for="post-content">Post content:</label>
                <textarea name="post-content" type="textarea" v-model="newPost.content"></textarea>
            </div>
            <button type="submit">NEW POST➡️</button>
        </form>
        <section class="display" v-show="showItem">
            <h3>{{newPost.title}}</h3>
            <p>{{newPost.content}}</p>
        </section>
        <template v-for="blog in blogsData">
            <div class="blog-title-box">
                <h3 class="post-title">{{blog.title}}</h3>
                <button class="pencil">✏️</button>
            </div>
            <div class="blog-body-box">
                <p class="post-body">{{blog.body}}</p>
                <button class="red-x" @click="handleBlogPostDelete(blog.id)">❌</button>
            </div>
        </template>
        <!-- {{blogsData}} -->
    </div>
</template>

<style>
.my-form {
    padding: .3rem;
    background-color: lightcyan;
    display: flex;
    flex-direction: column;
}
.input-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>