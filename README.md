![logo](/res/logo.png)

# Individuellt examensarbete - MyMovieDatabase

// Martin Hagegård - Webb25 - Done!

### Verktyg/Resurser

API med klassens favoritfilmer:

```
GET https://santosnr6.github.io/Data/favoritemovies.json
```

Lärarens noteringar:

#### OMDB

För att använda er av OMDBs film-API så behöver ni först av allt ansöka om en api-nyckel. Detta [hittar ni gratis här](https://www.omdbapi.com/apikey.aspx).
OMDBs film-API består av två olika typer av sökningar, en bred och en specifik. Den breda sökningen görs med en sträng som parameter och kommer att returnera de 10 första/bästa träffarna. Den breda sökningen innehåller inte särskilt mycket information utan bara det mest väsentliga som titel, poster, imdb-ID mm. URL för den breda sökningen:

```
GET http://www.omdbapi.com/?apikey=[yourkey]&s=[söksträng]
```

För att göra den mer specifika sökningen behöver ni använda er av det imdb-ID som den första sökningen genererade. Denna specifika sökning kommer att returnera mer specifik information om en specifik film. URL för den specifika sökningen:

```
GET http://www.omdbapi.com/?apikey=[yourkey]&plot=full&i=[imdb-ID]
```

### VMA

I vanliga fall är det ingen kanonidé att lägga upp sina API-nycklar på Github då dessa är privata, och kan leda till att någon annan gör slut på era gratisanrop. I examinationer där vi använder API-nyckel vill jag dock att ni ändå lägger in API-nyckeln i er kod som pushas, då det inte är hållbart att jag skall behöva kopiera och klistra in 54 st API-nycklar för att få allas kod att fungera (rättningen är redan tillräckligt tråkig som den är). Är ni rädda för att pusha era nycklar så kan ni göra era repon privata istället. Glöm dock inte att bjuda in mig isåfall.
