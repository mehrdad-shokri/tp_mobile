# TP app challenge
This is a sample app to demonstrate React Native knowledge.
# Getting started
* Clone the repository  
``git clone https://github.com/mehrdad-shokri/tp_mobile``
* Install dependencies  
``npm i``
* Run application in development environment  
``react-native run-android`` 

# Dependencies clarification
As of the requirement of the project, which mentions the app needs to be scaled to 10x, some architectural decisions are made which I'm going to explain here.  

Redux is utilized for efficient state management and (possible) data transfer between screens.  
Side effect management is satisfied by Sagas.  
To add new generator functions for a scene:
* create a file named as the screen name in the ``app/store/saga``
* Point the root saga in the created file in the ``app/store/config/rootSaga``  

React Navigation is used for application routing. you can take a look at its setup at ``app/containers/App``  

# Project structure
This project is divided into separate directories based on responsibilities:  
* app  
 Mostly all the code that you are going to work on is located here.  
 
 #### app directory
 * assets  
 Static assets
 * components  
 Presentational components that are not connected to redux store.
 * containers  
 All the application screens are located in this directory. Most of the components in this directory are container components and are usually connected to redux store
 * store  
 All the redux related configurations, reducers, action creators and sagas.
 * utils  
Utility files and methods.
 
