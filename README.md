# Xepelin-prueba
Prueba para Xepelin

Para el MVP se decidio utilizar Apps script de Google.
Tenia ganas de ver como funcionaba y me parecia el producto ideal para usarlo.

Apps script permite, montar una aplicacion web de manera sencilla, 
facilitando la interaccion con muchisimas APIs del ecosistema Google
como Gsheets, Gmail, Maps, entre otras. Ademas, facilita el proceso de deploy
para una prueba de concepto de este estilo, subiendola directamente a GCP. 

Los archivos en la carpeta MVP son las fuentes utilizadas. 
En caso de partir de una nueva hoja de calculo, bastaria con iniciar un proyecto
nuevo en Apps Scripts, copiar las fuentes y clickear en implementar como aplicacion web.

Se aprovecho las capacidades de este motor para usar otra Gsheet como base de datos para los 
usuarios administradores que estaran habilitados a modificar las tasas de la tabla principal.

Para poder acceder se debe tener una segunda sheet a la de los datos llama "Usuarios" con dos columnas
representando el usuario y la contraseña.

Para acceder al proyecto, ir al siguiente link:

`https://script.google.com/macros/s/AKfycbwl3aZr4yNJNj4VCb4IJThDu5AWCaPwel9X8PMSJ-IHPCY5vQCQPJ4r0jutdXJEBkU/exec`


Enlace al sheet utilizado 

`https://docs.google.com/spreadsheets/d/1G1i4Q-SR7N5NTOP4akxV3XkRZbnZKCP6hvViHwEiGhs/edit?usp=sharing`

Credenciales de ejemplo para acceder:

Usuario: ianiv@xepelin.com
Contraseña: password
