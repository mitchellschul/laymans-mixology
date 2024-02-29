from django.shortcuts import render
from openai import OpenAI
import json
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from .models import ingredientList, drinkList
from django.http import JsonResponse
from .serializers import DrinkSerializer, IngredientSerializer

# Create your views here.
def index(request):
    return JsonResponse({'response-payload': "test"})

@api_view(['POST'])
def setDrinks(request):
   
    try:
        drinks = drinkList.objects.get(id = 0)
        
        existing_drinks = drinks.drinks['drinks']
        # print("***********************")
        # print(request.data)
        # print("***********************")
        # print("")
        
        # new_ingredient = {
                    
        #     "index": str(len(existing_ingredients)),  
        #     "ingredient": request.data.get('query')          
             
        # }
        
        
        dataJson = json.loads(request.data.get('query'))
        

        existing_drinks.append(dataJson)
        drinks.drinks['drinks']= existing_drinks
            
        drinks.save()
        
        serializer = DrinkSerializer(drinks)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    except ingredientList.DoesNotExist:
        return Response({"error": "Ingredient List not found"}, status=status.HTTP_404_NOT_FOUND)
    


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
        print("***********************")
        print(type(existing_ingredients))
        print("***********************")
        print("")
        print("REQUEST: ", request.data.get('query'))
        # new_ingredient = {
                    
        #     "index": str(len(existing_ingredients)),  
        #     "ingredient": request.data.get('query')          
             
        # }
        new_ingredient = f"{request.data.get('query')}"
        

        existing_ingredients.append(new_ingredient)
        ingredients.ingredients = existing_ingredients
            
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
            {"role": "system", "content": "im going to provide you a list of drink ingredients, id like you to create 10 individual drinks that use the ingredients ill provide however do not include every ingredient in every drink, essentially you are a bartender and id like you to create unique drinks based off the list, must include ingredient amounts. Do not use ingredients that are not on the list. Strictly use only the ingredients on the list. garnishes will be included in the list, if they are not do not include them at all. USE ONLY INGREDIENTS THAT ARE INCLUDED IN THE LIST. once the list of drinks is created provide it in following json format:  {'name': 'Name','ingredients':{ingredient, quanity} , 'instructions':}"},
            {"role": "user", "content": f"LIST:{allIngredients}" }
        ]
    )
    print(response.choices[0].message.content)
    return JsonResponse({'response-payload': response.choices[0].message.content})