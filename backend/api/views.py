from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from openai import OpenAI
import json
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from .models import ingredientList, drinkList, savedDrinksList
from django.http import JsonResponse
from .serializers import DrinkSerializer, IngredientSerializer, SavedDrinkSerializer, SignUpSerializer

# Create your views here.
def index(request):
    return JsonResponse({'response-payload': "test"})

@api_view(['POST'])
def signUp(request):
    username = request.data.get('username')
    password = request.data.get('password')
    email = request.data.get('email')
    first = request.data.get('first_name')
    last = request.data.get('last_name')
    if User.objects.filter(username=username).exists():  
        print('username already exists')
        return JsonResponse({'message' : 'username already exists'})
    
    user = User.objects.create_user(password=password, username=email, email=email, first_name=first, last_name=last)
    user.save()
    login(request, user)
    # redirect('/Hub')
    return JsonResponse({'message' : 'Signup Successfull'})

@api_view(['POST'])
def logIn(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)
    if user is not None:
        print('here')
        login(request, user)
        return JsonResponse({'message': 'Login successful'})
    else:
        return JsonResponse({'message': 'Login failed'}, status=401)

@api_view(['POST'])
def setSavedDrinks(request):
    try:

        # NEED TO CHECK IF DRINK IS ALREADY SAVED
        savedDrinks = savedDrinksList.objects.get(id = 0)
        existingDrinks = savedDrinks.drinks['savedDrinks']
        drink =request.data.get('query')
        existingDrinks.append(drink)
        savedDrinks.drinks['savedDrinks'] = existingDrinks 
        savedDrinks.save()
        serializer = DrinkSerializer(savedDrinks)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except drinkList.DoesNotExist:
        return Response({"error": "Drink List not found"}, status=status.HTTP_404_NOT_FOUND)
    
@api_view(['POST'])
def removeSavedDrink(request):
    try:
        print('++++++++QUERY++++++++++')
        print(request.data.get('query'))
        print('++++++++QUERY++++++++++')
        
        savedDrinks = savedDrinksList.objects.get(id=0)
        print('++++++++BEFORE++++++++++')
        print('before', savedDrinks.drinks['savedDrinks'])
        print('++++++++BEFORE++++++++++')
        if request.data.get('query') in savedDrinks.drinks['savedDrinks']: savedDrinks.drinks['savedDrinks'].remove(request.data.get('query'))
        
        print('after', savedDrinks.drinks)
        
        savedDrinks.save()
        serializer = SavedDrinkSerializer(savedDrinks)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    except ingredientList.DoesNotExist:
        return Response({"error": "Ingredient List not found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def getSavedDrinks(request):
    savedDrinks = savedDrinksList.objects.all()
    serializer = DrinkSerializer(savedDrinks, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['POST'])
def setDrinks(request):
   
    try:
        drinks = drinkList.objects.get(id = 0)
        
        dataJson = json.loads(request.data.get('query'))
        print('*************')
        print(dataJson)
        print('*************')
        

        # existing_drinks.append(dataJson.drinks)
        drinks.drinks=dataJson
            
        drinks.save()
        
        serializer = DrinkSerializer(drinks)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    except drinkList.DoesNotExist:
        return Response({"error": "Drink List not found"}, status=status.HTTP_404_NOT_FOUND)
    


@api_view(['GET'])
def getDrinks(request):
    drinks = drinkList.objects.all()
    serializer = DrinkSerializer(drinks, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
def getIngredients(request):
    ingredients = ingredientList.objects.all()
    serializer = IngredientSerializer(ingredients, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['POST'])
def addIngredient(request):
    try:
        ingredients = ingredientList.objects.get(id = 0)
        
        existing_ingredients = ingredients.ingredients
        
        new_ingredient = f"{request.data.get('query')}"
        
        print("DRINK THINGY")
        print(request.data.get('query'))
        

        existing_ingredients.append(new_ingredient)
        ingredients.ingredients = existing_ingredients
            
        ingredients.save()
        
        serializer = IngredientSerializer(ingredients)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    except ingredientList.DoesNotExist:
        return Response({"error": "Ingredient List not found"}, status=status.HTTP_404_NOT_FOUND)
    
@api_view(['POST'])
def removeIngredient(request):
    try:
        ingredients = ingredientList.objects.get(id = 0)
       
        if request.data.get('query') in ingredients.ingredients: ingredients.ingredients.remove(request.data.get('query'))
      
        ingredients.save()
        serializer = IngredientSerializer(ingredients)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    except ingredientList.DoesNotExist:
        return Response({"error": "Ingredient List not found"}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def OPAIEndpointQuery(request):
    client = OpenAI(organization='org-b8Cim4657DK7l86wR7pWrfXg', api_key=settings.OPEN_AI_KEY)
    
    ingredients = ingredientList.objects.get(id = 0)
    allIngredients = ingredients.ingredients
    
    
    temp = ''
    
    for i in allIngredients:
        temp = temp + ' ' + i
    
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "im going to provide you a list of drink ingredients, id like you to create 10 individual drinks that use the ingredients ill provide however do not include every ingredient in every drink, essentially you are a bartender and id like you to create unique drinks based off the list, must include ingredient amounts. Do not use ingredients that are not on the list. Strictly use only the ingredients on the list. garnishes will be included in the list, if they are not do not include them at all. USE ONLY INGREDIENTS THAT ARE INCLUDED IN THE LIST. Make sure that each drink includes at least on alcohol. once the list of drinks is created provide it in following json format:  {'name': 'Name','ingredients':{ingredient, quanity} , 'instructions':}"},
            {"role": "user", "content": f"LIST:{allIngredients}" }
        ]
    )
    print(response.choices[0].message.content)
    return JsonResponse({'response-payload': response.choices[0].message.content})