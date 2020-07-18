$(function() {
    //listen for form submission
    $('#js-shopping-list-form').submit( event => {
    //stop the default form submission behavior
    event.preventDefault();
    //store new list value from what was input
    const newListInput = $(this).find(
    'input[name="shopping-list-entry"]').val();
    //create new list item variable, same classes as other list items
    const newListItem = '<li> <span class="shopping-item">' + newListInput + '</span> <div class="shopping-item-controls"> <button class="shopping-item-toggle"> <span class="button-label">check</span> </button> <button class="shopping-item-delete"> <span class="button-label">delete</span> </button> </div> </li>';
    //append the variable to the shopping list
    $('.shopping-list').append(newListItem);
    //pass input an empty value to clear input field
    $(this).find('input[name="shopping-list-entry"]').val("");
    });  

    //listen for click on 'check' button
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    //travels up DOM tree to look for 'li' match, add toggleClass to selector
    $(event.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    })

    //listen for click on 'delete' button
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    //travels up DOM tree to look for 'li' match, remove selector
    $(event.target).closest('li').remove();
    })
})

