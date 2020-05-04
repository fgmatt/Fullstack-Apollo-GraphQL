# Login

## Hauptseite

### E-Mail
Es wird geprüft, ob die E-Mail das korrekte Format besitzt.Besitzt sie nicht das korrekte Format, wird der Benutzer sofort gewarnt. Leerzeichen am Anfang und Ende werden abgeschnitten.

### Passwort
Das Passwort wird darauf darauf getestet, ob es mindestens 8 Zeichen und höchstens 70 Zeichen hat. Ist dies nicht der Fall, wird der Benutzer sofort gewarnt. Leerzeichen am Anfang und Ende werden abgeschnitten

### Login
Wird der Loginbutton betätigt, wird getestet, ob ein Beenutzer zu der E-Mail exidtiert und ob das Passwort zur E-Mail passt. Ist dies nicht der Fall, wird eine Fehlermeldung ausgegeben und der Benutzer wird informiert, dass das Passwort oder die E-Mail nicht korrekt sind. Sind E-Mail und Passwort korrekt, wird der Benutzer in den Benutzerbereich weitergeleitet.

## Benutzerbereich
Der Benutzer sieht hier seine E-Mail. Er kann sie ändern, indem er auf E-Mail ändern klickt. Analog funktioniert es mit Passwort ändern. Wenn er einer dieser Operationen tätigt, kommt ein Feld, dass die Eingabe des Passwortes verlangt. Wird das passwort korrrekt eingegeben, kann die E-mail oder das Passwort geändert werden. Über Logout kann ausgeloggt werden.

## Neuer Benutzer

### E-Mail
Die E-Mail wird auf die richtige Form überprüft. Ausserdem wird getestet, ob die E-mail nicht schon im System vorhanden ist. Leerzeichen am Anfang und am Ende werden abgeschnitten.

### Passwort
Es wird getestet, ob das Passwort mindestens 8 Zeichen und höchstens 70 Zeichen hat. Leerzeichen am Anfang und am Ende werden abgeschnitten.

### Bestätigung Passwort
Die Leerzeichen am Anfang und Ende werden abgeschnitten. Die Bestätigung wird darauf überprüft, ob sie mit dem Passwort übereinstimmt.

### Login erstellen
Beim Klick auf Login erstellen werden die vorhergehenden Prüfungen getestet und durchgeführt, ausser die Prüfungen der Form der E-Mail und der Länge des Passwortes. Bleiben diese negativ, so ist der Button Login erstellen gesperrt, andernfalls werden die abgeschickten Daten geprüft, ist das Erstellen des Logins erfolgreich kommt der Benutzer auf die Loginseite, wenn nicht kommt eine Fehlermeldung und die Felder werden geleert.
