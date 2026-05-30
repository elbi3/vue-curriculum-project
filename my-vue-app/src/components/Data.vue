<script setup lang="ts">
import { watch } from "vue";
import { useForm, useField } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import { object, string, boolean } from "yup";
import { useQuery, useMutation, useQueryClient } from "@tanstack/vue-query";
//useForm
const { handleSubmit, resetForm, meta, isSubmitting, setFieldError } = useForm({
    validationSchema: toTypedSchema(
        object({
            username: string(),
            email: string().email(),
            bio: string(),
            notifications: boolean()
        })
    ),
});
//useForm followed by useField calls:
const { value: username, errorMessage: usernameError } = useField("username");
const { value: email, errorMessage: emailError } = useField("email");
const { value: bio, errorMessage: bioError } = useField("bio");
const { value: notifications, errorMessage: notificationsError } = useField("notifications");


const { data, isLoading } = useQuery({
    queryKey: ['userProfile'],
    queryFn: () => fetch('http://localhost:3001/profile').then(r => r.json())
});

const queryClient = useQueryClient();

const { mutate } = useMutation({
    mutationFn: (formData) => fetch("http://localhost:3001/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    }).then(r => r.json()),
    onSuccess: (responseData) => {
        queryClient.invalidateQueries({ queryKey: ['userProfile'] })
        resetForm({ values: responseData})
    },
    onError: (error: any) => {
        setFieldError('email', error.message)
    }
});

watch(data, () => {
    if(data.value) resetForm({ values: data.value});
    //hydration step that seeds the form from the server
});

const onSubmit = handleSubmit(async (values) => {
    if(values.email === "conflict@example.com"){
        throw new Error("Email already in use");
    }
    mutate(values)
})
</script>

<template>
    <div v-if="isLoading">Loading...</div>
    <div v-else class="card-container"> 
        <form @submit.prevent="onSubmit">
        <div class="row">0</div>
        <div class="form-inputs-group">
            <div class="input-container">
                <label class="my-label" for="user-name">UserName:</label>
                <input class="my-input" 
                name="user-name" 
                type="text" 
                v-model="username"
                >
                <span v-if="usernameError">{{usernameError}}</span>
            </div>
            <div class="input-container">
                <label class="my-label" for="email">Email:</label>
                <input class="my-input" name="email" type="text" v-model="email">
                <span v-if="emailError">{{emailError}}</span>
            </div>
            <div class="input-container">
                <label class="my-label" for="bio">Bio:</label>
                <textarea name="bio" id="" v-model="bio"></textarea>
                <!-- <textarea class="my-input" name="bio" type="text" v-model="bio" /> -->
                <span v-if="bioError">{{bioError}}</span>
            </div>
            <div class="input-container">
                <input type="checkbox" name="notifications" v-model="notifications" />
                <label class="my-label" for="notifications"> ⬅️ Email Notifications</label>
            </div>
            <span v-if="notificationsError">{{notificationsError}}</span>
        </div>
        <button :disabled="!meta.dirty || isSubmitting">{{isSubmitting? "Registering..." : "submit"}}</button>
    </form>
    </div>
</template>


<style scoped>
.card-container {
    display: flex;
    flex-direction: column;
    width: 60%;
    background-color: whitesmoke;
}
.row {
    border-bottom: 1px solid red;
    color: whitesmoke;
}
.form-inputs-group {
    margin: 0;
}
.input-container {
    border-bottom: 1px solid darkcyan;
    padding-left: 5ch;
}
.my-label {
    color: darkblue;
}
.my-input {
    background-color: whitesmoke;
    border: none;
}
.my-input:hover {
    border: none;
}
.my-input:active {
    border: none;
}
</style>