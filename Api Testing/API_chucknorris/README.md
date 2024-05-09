# API Testing

## Testing https://api.chucknorris.io/.

Progressively, I'll be uploading exercise content.<br>
Currently, there is a Json file with this exercices:<br>
1. Cree en Postman una colección y 3 peticiones (Requests) tipo GET para los tres primeros endpoints de la API.
2. Probé manualmente que los 3 endpoints funcionen correctamente.
3. Añadí tests en los 3 endpoints para comprobar que el código de estado sea un 200.
4. Añadí un test más en el endpoint de Categorías para comprobar que la respuesta ha devuelto 16 categorías.
5. Creé un entorno con la URL base de los endpoints guardada y sustituí la URL en los 3 endpoints.
6. En el entorno, guardé un valor para una categoría y configuré el endpoint "Random from Category" para apuntar a esa categoría. Además, creé otro entorno con la misma baseURL pero con una categoría diferente, y verifiqué que al cambiar de entorno las bromas sean acordes a la categoría correspondiente.


English: 
1. Created in Postman a collection and 3 GET requests for the first three endpoints of the API.
2. Manually tested that all 3 endpoints function correctly.
3. Added tests to the 3 endpoints to verify that the status code is 200.
4. Added one more test in the Categories endpoint to check that the response has returned 16 categories.
5. Created an environment with the base URL of the endpoints saved and replaced the URL in the 3 endpoints.
6. In the environment, saved a value for a category and configured the "Random from Category" endpoint to point to that category. Additionally, created another environment with the same baseURL but with a different category and verified that switching environments results in jokes relevant to the corresponding category.