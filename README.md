## **Overview**

You are tasked with improving a Todo App that allows users to manage their daily tasks efficiently. The application currently loads an initial set of todos from an external API but is missing key functionality. Your goal is to implement the requested features to enhance user experience.

This application interacts with the DummyJSON Todos API. You can find the full API documentation here:  
🔗 https://dummyjson.com/docs/todos#todos-all

The application uses Tailwind CSS for styling. You are free to modify the styles, improve the UI, and organize the app structure as you see fit. The functionality is the primary focus, but a well-structured and visually appealing UI is encouraged.

---

### **Styling & UI Guidelines**

🎨 **Tailwind CSS is used for styling, and you are encouraged to enhance the UI.**

- You may customize the layout, colors, and interactions as you see fit.
- The app should remain visually consistent and user-friendly.
- Feel free to **restructure the components** to improve readability and maintainability.
- The **only requirement** is that the functionality works as expected.

---

## **Tasks**

#### **1️⃣ Implement Numbered Pagination**

- Users should be able to navigate between pages using numbered pagination.
- The correct page should be displayed when a page number is clicked.
- The current active page should be visually distinguished.

✅ **Criteria:**

- The pagination component must correctly update the displayed todos. ✅
- Clicking a page number should load the corresponding todos. ✅
- The active page button should be highlighted appropriately. ✅

---

#### **2️⃣ Implement Adding a New Todo**

- Users should be able to create new todos.
- The new todo should appear instantly in the list.
- Ensure the todo is **persisted via an API request**.

✅ **Criteria:**

- The todo must be added to the displayed list immediately. ✅
- The API should store the new todo. ✅
- The input field should be cleared after submission. ✅

---

#### **3️⃣ Implement Deleting a Todo**

- Users should be able to remove a todo by clicking a delete button.
- The todo should be visually removed from the list as soon as the action is triggered.
- Ensure the deletion is **confirmed via an API request**.

✅ **Criteria:**

- The UI must reflect the deletion immediately. ✅
- The API should successfully remove the todo. ✅
- Error handling should be implemented in case the request fails. ✅

💡 **You have the flexibility to choose how the delete button is presented** (e.g., inline with each todo, a contextual menu, etc.).

---

#### **4️⃣ Implement Optimistic UI Updates**

- The application should provide a seamless experience by instantly updating the UI for add and delete actions.
- If an API request fails, the UI should revert to its previous state.
- Users should be notified of any errors.

✅ **Criteria:**

- The UI should update immediately when a todo is added or deleted. ✅
- If the request fails, the change should be undone. ✅
