<form action="{{path}}" method="post">
    <label for="name">Name:</label>
    <input type="text" name="name" value="{{name}}">
    <label for="desription">Beschreibung:</label>
    <textarea name="description" cols="30" rows="10">{{desc}}</textarea>
    <label for="date">Datum und Zeit:</label>
    <input type="text" name="date" value="{{date}}">
    <label for="address">Adresse:</label>
    <input type="text" name="address" value="{{address}}">
    <input type="submit" name="submit">
    <input type="checkbox" name="edit" style="visibility: hidden" {{checked}}>
    <input type="number" name="id" style="visibility: hidden" value="{{id}}">
</form>