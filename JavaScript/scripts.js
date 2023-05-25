<script>
    openmenu.addEventlistener("click", () = {
        menubar.style.display = 'flex'
        menu.style.opacity = '1'
    })

    closemenu.addEventlistener('click', () =  {
        menubar.style.opacity = '0'
        menubar.removeAttribute('style')
    })
</script>