.Dev Stack

.Technology that you use--A modern and responsive technology stack builder built with React, TypeScript, and Tailwind CSS.


.A little description---
Dev Stack is a modern and responsive web application where users can explore popular development technologies and build their own personalized technology stack by adding and removing technologies.

features about your project---
1.Explore Technologies – Users can explore different technologies with their category, description, difficulty, and rating.
2.Build Your Own Stack – Users can add technologies to their stack and remove them whenever they want.
3 . Responsive Design – The website works smoothly on desktop, tablet, and mobile devices.




1.What is JSX, and why is it used in React?
ans :- JSX is a syntex that we use in javascript using html formate . we use it in react beacuse it can make easy to read and write.



2.What is the difference between props and state?
ans: -  props are used to pass data from a parent to child component. State is used to store that can change inside a component.



3.What does the useState hook do, and where did you use it in this project?
ans;- we use it for functional React components hold and track dynamic data.





4.What does the useEffect hook do, and why did you need it to load the JSON data?
ans- You needed it to import and set the technologies from your JSON file into state when the component started up.

5.Why does every item in a .map() list need a unique key prop?
ans-A unique key helps React identify each item in list. It helps React update the list efficiently when items are added, removed, or changed.

6.What is conditional rendering? Show one place you used it (example: the empty stack message).
ans:- Conditional rendering means showing different content depending on a condition.

I used it in **Your Stack**:

{selectedTechnologies.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  selectedTechnologies.map((technology) => (
    // selected technologies
  ))
)}



7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
ans:- A parent pass data to a child using props. A child can send information back by calling a function passed to it through props.