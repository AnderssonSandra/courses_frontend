# courses_frontend
Frontend to show my courses

## Länk till sida 

http://studenter.miun.se/~saan1906/writeable/dt173g/publish/

## Beskrivning av lösningen 

### Gulp 

Jag använder mig av gulp för att hämta filer från källkoden, minifiera och sammansätta dem innan de skickas till katalogen för publisering. Jag har funktinoalitet för att rensa det som redan finns i katalogen för publisering när gulp startas. Jag har funktionalitet för att kopiera över HTML filer. Jag har funktionalitet för att hantera Javascript-kod innan den skickas till publiseringskatalogen. Jag sammansätter koden och konverterar koden så att den kan läsas av alla webbläsare innan den skickas till publiseringskatalogen. Jag har även funktionalitet för att ta in scss-filer, sammansätta och minifera de samt göra om de till css innan de förs över till publiseringskatalogen. Jag har även använt mig av browser-sync när jag testat koden så att uppdateringarna skedde automatiskt när jag ändrade i mina filer. Jag har också använt mig av en  "watcher" för att lyssna på uppdateringar och då föra över förändringarna till katalgoen publish samt uppdatera förändringarna på webservern.

### Hämta och skicka data till API

#### Hämta och skriva ut kurser: 
Jag har använt mig av fetch för att hämta data från mitt API. Jag har skapat funktionalitet för att hämta alla kurser från API:et och skriva ut dem i HTML koden. Jag hämtar data med GET. Jag gör sedan en koll om jag får felkod 404 och så skickar jag vidare det till min .catch och där skickar jag ut ett felmeddelande om att det inte finns några kurser att visa. Om det finns kurser så skriver jag ut det i en div. Den data som skrivs ut är kursnamn, kurskod, nivå på kursen samt en länk till kursplanen. Jag skriver även ut en radera-knapp tillhörande kursen och i den skickar jag med kursens id. 

#### Lägga till kurser:
Jag har använt mig av fetch för att lägga till kurser. Jag hämtar in värden från HTML formuläret när användaren klickar på skicka. Jag använder mig av event hanteraren "click". När användaren klickar på "lägg till" så anropas funktionen "addCourse" som tar in värdena från formuläret och skickar dem med metoden "POST". Data skickas i JSON-format. Om det blir ett fel så skickas ett felmeddelande ut till användaren. 

#### Radera kurser
När användaren klickar på "radera" en kurs så anropas funktionen "deleteCourse" och ett id skickas med. Id:t som skickas med är id:t på kursen i databasen. Den skickar med metoden "DELETE" via fetch och då raderas kursen med det medskickade id:t. 
