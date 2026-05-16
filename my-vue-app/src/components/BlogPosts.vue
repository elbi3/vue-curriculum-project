<script setup lang="ts">
import { useQuery, useMutation } from '@tanstack/vue-query';
import { ref } from "vue";

const editingId = ref(null);
const editMode = ref(null);
const showItem = ref(false);
const newPost = ref({
    userId: Date.now(),
    title: "",
    body: ""
});

const url = "https://jsonplaceholder.typicode.com/posts";
//-->QUERY blogs
const {isPending: blogsPending, isError: blogssError, data: blogsData, error: blogsErr} = useQuery({
    queryKey: ["blogs"], 
    queryFn: fetchBlogs
});

//-->MUTATE posts: new 
const createPost = useMutation({mutationFn: addPost});
//-->MUTATE posts: delete
const removePost = useMutation({
    mutationFn: deletePost,
    onSuccess: () => console.log("API confirmed delete")
    });
//-->MUTATE posts: patch
const editTitle = useMutation({mutationFn: patchPost});
//-->MUTATE posts: put
const editPost = useMutation({mutationFn: putPost});

//-->FETCH functions
async function fetchBlogs(){
    console.log("[QUERY] Fetching blogs..."); //log
    const response = await fetch(url);
    console.log("[QUERY] Response received:", response); //log
    if(!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("[QUERY] Parsed blog data:", data); //log
    return data;
};
async function addPost(){
    console.log("[POST] Creating new post..."); //log
    console.log("[POST] Payload:", newPost.value); //log

    const response = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newPost.value)//make sure you don't send raw ref!
    } );
    console.log("[POST] Raw response:", response); //log
    if(!response.ok) {
        throw new Error("Network response was not ok");
    }

    const data = await response.json()
    console.log("[POST] Server returned:", data); //log
    return data;
};
async function deletePost(id){
    console.log("[DELETE] Attempting delete..."); //log
    console.log("[DELETE] Post ID:", id); //log
    const response = await fetch(`${url}/${id}`, {method: "DELETE"});
    console.log("[DELETE] Response:", response); //log
    if(!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json()
    console.log("[DELETE] Server returned:", data); //log
    return data;
};
async function patchPost({id, title}){
    console.log("[PATCH] Editing title only..."); //log
    console.log("[PATCH] Post ID:", id); //log
    console.log("[PATCH] New title:", title); //log
    const response = await fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({title})//don't forget to send an object instead of a raw string
    } );  
    console.log("[PATCH] Response:", response);
    if(!response.ok) {
        throw new Error("Network response was not ok");
    }  
    return response.json();
};
async function putPost({id, post}){
    console.log("[PUT] Replacing entire post...");
    console.log("[PUT] Post ID:", id);
    console.log("[PUT] Replacement payload:", post);
    const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(post)
    } ); 
    
    console.log("[PUT] Response:", response);  
    if(!response.ok) {
        throw new Error("Network response was not ok");
    } 
    const data = await response.json();
    console.log("[PUT] Server returned:", data);
    return data;
}
//-->HANDLERS
function handleBlogPostDelete(id){
    removePost.mutate(id);
    console.log("post deleted");
};
function handleTitleEdit(id, title){
        // editingId.value = "patch";
        editingId.value = id;
        editMode.value = "patch";
        newPost.value.title = title;
        newPost.value.content = "";

};
function handleBlogPostEdit(id, title, body){
        // editingId.value = "replace";
        editingId.value = id;
        editMode.value = "replace";
        newPost.value.title = title;
        newPost.value.content = body;
};

function handleSubmit(){
    //check whether we are editing a post or creating a new one
    if(editingId.value !== null) {
        if(editMode.value === "patch"){
            
            //if editing, call the PATCH function
            editTitle.mutate({
                id: editingId.value,
                title: newPost.value.title});
        }
        else if(editMode.value === "replace"){
            //if replacing existing post, call our PUT function
            editPost.mutate({
                id: editingId.value,
                post: newPost.value});
        }
        
    } else {
        //else POST new blog post
        createPost.mutate();
        showItem.value = true;

    }
    //reset form by updating ref "newPost"
    //reset editingId ref (editing/replacing/posting?)
    editingId.value = null;
    editMode.value = null;
    newPost.value.title = "";//keep these empty or no?
    newPost.value.body = "";
};
</script>

<template>
    <div class="container">
        <form class="my-form" v-on:submit.prevent="handleSubmit">
            <h3>Add a new post:</h3>
            <div class="input-container">
                <label for="blog-title">Post title:</label>
                <input name="blog-title" type="text" class="title-input"v-model="newPost.title">
            </div>
            <div class="input-container">
                <label for="post-content">Post content:</label>
                <textarea name="post-content" type="textarea" class="text-area" v-model="newPost.body"></textarea>
            </div>
            <button type="submit" class="submit-btn">submit my post ➡️</button>
        </form>
        <section class="display" v-show="showItem">
            <h3>{{newPost.title}}</h3>
            <p>{{newPost.body}}</p>
        </section>
        <!-- //since template is invisble to the DOM, place the "key" on a "real" element: -->
        <h2>Blog Posts:</h2>
        <template v-for="blog in blogsData" :key="blog.id">
            <section class="my-post">
                <button class="fix" title="edit this post" @click="handleBlogPostEdit(blog.id, blog.title, blog.body)">🛠️</button>
                <div class="blog-title-box">
                    <RouterLink :to="`/blog/post/${blog.id}`">
                        <h3 class="post-title">{{blog.title}}</h3>
                    </RouterLink>
                    <!-- <router-link :to="`/blog/${blog.id}`">
                    </router-link> -->
                    <button class="pencil" title="edit title" @click="handleTitleEdit(blog.id, blog.title)">✏️</button>
                </div>
                <div class="blog-body-box">
                    <p class="post-body">{{blog.body}}</p>
                    <button class="red-x" title="delete blog" @click="handleBlogPostDelete(blog.id)">❌</button>
                </div>
            </section>
        </template>
        <!-- {{blogsData}} -->
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
}
.my-form {
    border: 2px solid purple;
    border-radius: .25rem;
    padding: .3rem;
    background-color: lightcyan;
    display: flex;
    flex-direction: column;
    margin: .5rem;
}
.input-container {
    padding: .2rem;
    display: flex;
    flex-direction: column;
}
.title-input,
.text-area {
    min-width: 10rem;
    width: 100%;
    border: 2px solid indianred;
    border-radius: .15rem;
}
.submit-btn {
    border: 2px solid indianred;
    background-color: lightpink;
    margin: .2rem;
    width: 10rem;
}
.my-post {
    background-color: aliceblue;
    border: 2px solid darkslateblue;
    border-radius: .15rem;
    margin: .5rem;
    padding: .5rem;
}
.blog-title-box {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
}

.blog-body-box {
    display: flex;
    flex-direction: row;
    align-items: baseline;
}
.pencil,
.red-x,
.fix {
    border: 1px solid darkslateblue;
    border-radius: .5rem;;
    }
</style>