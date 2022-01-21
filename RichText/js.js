const elements = document.querySelectorAll('.btn');

elements.forEach(element => {
    element.addEventListener('click', () => {
        let command = element.dataset['element'];

        switch(command){
            case 'createLink':
                let url = prompt("Enter the link here:", "http://")
                document.execCommand(command, false, url);
                break;
            
            case 'formatBlock':
                document.execCommand(command, false, '<blockquote>');
                break;
            
            case 'title':
                document.execCommand('formatBlock', false, '<h1>');
                break;
            default:
                document.execCommand(command, false, null)
        }

        
    })
});