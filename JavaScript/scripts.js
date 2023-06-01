



      const observer = new IntersectionObserver(entries => {
           console.log(entries)
           
           Array.from(entries).array.forEach(entry => {
            if (entry.intersectionRatio >= 1) {
                  entry.target.classlist.add('init-hidden-off')
            }
            
           })
      }, {
            treshold: [0, .5, 1]

      })

      Array.from(document.querySelectorAll(',init-hidden')).forEach(element => {
            observer.observe(element)

      })
  