import '../styles/components/filter.scss';

function Filter(){
  return `
    <div class="filter">
      <div class="filter__price">
        <!--To know more about the dual slider go to: https://github.com/yairEO/ui-range-->
        <div class="range-slider flat" 
                    data-ticks-position='top' 
                    style='--min:10; --max:1000; --prefix:"$"; --value-a:200; --value-b:800; --text-value-a:"200"; --text-value-b:"800";--thumb-size:15px; --thumb-color: #0366D6;'
        >
          <input type="range" min="10" max="1000" value="200" oninput="this.parentNode.style.setProperty('--value-a',this.value); this.parentNode.style.setProperty('--text-value-a', JSON.stringify(this.value))">
          <output></output>
          <input type="range" min="10" max="1000" value="800" oninput="this.parentNode.style.setProperty('--value-b',this.value); this.parentNode.style.setProperty('--text-value-b', JSON.stringify(this.value))">
          <output></output>
          <div class='range-slider__progress'></div>
        </div>

        <div class='filter__price-numbers'>
          <input type='number' min='10' max='1000' placeholder='min'>
          <hr/>
          <input type='number' min'10' max='1000' placeholder='max'>
        </div>
      </div>
      <div class="filter__types">
        <div>Types</div>
        <label><input type="checkbox" value='normal'/> Normal</label>
        <label><input type="checkbox" value='fire'/> Fire</label>
        <label><input type="checkbox" value='electric'/> Electric</label>
        <label><input type="checkbox" value='water'/> Water</label>
        <label><input type="checkbox" value='steel'/> Steel </label>
        <label><input type="checkbox" value='grass'/> Grass</label>
        <label><input type="checkbox" value='dragon'/> Dragon</label>
      </div>
    </div>
  `
}

export default Filter
