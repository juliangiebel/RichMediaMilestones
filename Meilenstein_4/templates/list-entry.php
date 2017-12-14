<li class="list-item">
    <div class="item-header">
        <h3>{{name}}</h3> <p>Adresse: {{address}}</p> <p>Datum: {{date}}</p>
        <div class="buttons" style="display: {{button-display}};">
            <a href="{{edit-path}}?id={{id}}" class="fa fa-pencil" ></a>
            <a href="{{view-path}}?id={{id}}&delete=true" class="fa fa-times"></a>
        </div>
    </div>
    <div class="item-content">
        <p>{{desc}}</p>
    </div>
</li>