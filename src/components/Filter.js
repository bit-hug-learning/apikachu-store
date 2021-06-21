import '../styles/components/filter.scss';

function Filter(){
  return `
    <form class="filter">
      <fieldset class="filter__price">
        <legend>Price</legend>
        <!--To know more about the dual slider go to: https://github.com/yairEO/ui-range-->
        <div class="range-slider flat" 
                    data-ticks-position='top' 
                    style='--min:10; --max:1000; --prefix:"$"; --value-a:200; --value-b:800; --text-value-a:"200"; --text-value-b:"800";--thumb-size:15px; --thumb-color: #1492E6; --primary-color:#1492E6;'
        >
          <input id='range-min' type="range" min="10" max="1000" value="200" oninput="this.parentNode.style.setProperty('--value-a',this.value); this.parentNode.style.setProperty('--text-value-a', JSON.stringify(this.value))">
          <output></output>
          <input id='range-max' type="range" min="10" max="1000" value="800" oninput="this.parentNode.style.setProperty('--value-b',this.value); this.parentNode.style.setProperty('--text-value-b', JSON.stringify(this.value))">
          <output></output>
          <div class='range-slider__progress'></div>
        </div>

        <div class='filter__price-numbers'>
          <input id='minprice' type='number' min='10' max='1000' placeholder='$ - min'>
          <hr/>
          <input id='maxprice' type='number' min='10' max='1000' placeholder='$ - max'>
        </div>
      </fieldset>

      <fieldset class="filter__types">
        <legend>Types</legend>
        <label><input type="checkbox" value='normal'/> Normal</label>
        <label><input type="checkbox" value='fire'/> Fire</label>
        <label><input type="checkbox" value='electric'/> Electric</label>
        <label><input type="checkbox" value='water'/> Water</label>
        <label><input type="checkbox" value='steel'/> Steel </label>
        <label><input type="checkbox" value='grass'/> Grass</label>
        <label><input type="checkbox" value='dragon'/> Dragon</label>
      </fieldset>
    </form>
  `
}

export default Filter

window.addEventListener( 'load', () => {
  const rangeSlider = document.querySelector(".range-slider")
  const minPrice = document.getElementById('minprice')
  const maxPrice = document.getElementById('maxprice')

  const minRange = document.getElementById('range-min')
  const maxRange = document.getElementById('range-max')

  minRange.addEventListener('change', () => {
    minPrice.value = minRange.value

  })
  maxRange.addEventListener('change', () => {
    maxPrice.value = maxRange.value
  })

  minPrice.addEventListener('change', () => {
    minRange.value = minPrice.value
    rangeSlider.style.setProperty("--value-a", minPrice.value)
    rangeSlider.style.setProperty("--text-value-a", minPrice.value)
  })
  maxPrice.addEventListener('change', () => {
    maxRange.value = maxPrice.value
    rangeSlider.style.setProperty("--value-b", maxPrice.value)
    rangeSlider.style.setProperty("--text-value-b", maxPrice.value)
  })


  function getCheckboxsValues(){
    let values = []
    const checkboxs = document.querySelectorAll('.filter__types input[type=checkbox]')
    checkboxs.forEach(checkbox => {
      checkbox.addEventListener('change', function(){
        if(checkbox.checked){
          values = [...values, checkbox.value]
        }else{
          values.splice(values.indexOf(checkbox.value), 1)
        }
        console.log(values)
      })
    });
    return values
  }
  //Get checkbox's values and log an array with them
  const values = getCheckboxsValues()

})

