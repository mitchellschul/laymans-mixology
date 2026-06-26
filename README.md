# ![WebApp](./github/Cover.png)

# Layman's Mixology

Layman's Mixology is a full-stack web application that helps users discover cocktail recipes based on the ingredients they already have on hand. Instead of searching through recipe lists, users can enter the ingredients available to them and receive personalized cocktail recommendations generated through the OpenAI API.

Originally created as a hackathon project, the application grew into a larger project focused on building an intuitive user experience while integrating AI into a practical, everyday use case.

---

## Demo

![](./github/mixologydemo.gif)

---

# Features

- Generate personalized cocktail recommendations based on available ingredients
- AI-powered recipe generation using the OpenAI API
- Ingredient-based search and filtering
- Responsive interface built with React
- Django backend with REST API communication
- Clean and intuitive user experience designed for quick recipe discovery

---

# Tech Stack

### Frontend
- React
- JavaScript
- HTML/CSS
- Tailwind CSS

### Backend
- Python
- Django
- Django REST Framework

### APIs & Services
- OpenAI API

---

# Architecture

The application uses a React frontend that communicates with a Django backend through REST APIs. User input is sent to the backend, where requests are processed and forwarded to the OpenAI API. Responses are then returned to the frontend and presented in an easy-to-read format for the user.

---

# My Contributions

This project allowed me to work across both design and development. My responsibilities included:

- Designing the user experience and application flow
- Building the React frontend
- Developing backend functionality with Django
- Integrating the OpenAI API
- Connecting frontend components to backend endpoints
- Debugging, testing, and iterating on the application throughout development

---

# What I Learned

This project strengthened my experience with full-stack development and API integration while reinforcing the importance of creating user flows that feel simple, even when the underlying logic is more complex. It also gave me hands-on experience connecting a modern frontend with a Python backend and working with third-party APIs.

---

# Running the Project

### Frontend

```bash
cd frontend
npm install
npm start
```

### Backend

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

---

# Future Improvements

- User accounts and saved favorite recipes
- Expanded ingredient database
- Nutritional information and dietary filters
- Improved recommendation accuracy
- Mobile-friendly experience

---

## License

This project was created for educational and portfolio purposes.
