export function getTableTemplate() {
  return `
  <div class ="tittle">
  <span>
    <div>W</div>
    <div>I</div>
    <div>N</div>
    <div>N</div>
    <div>E</div>
    <div>R</div>
    <div>S</div>
  </span>
    </div>
  <span class="winners-amount"></span>
  <table class="table">
  <thead>
    <tr class="table_nav">
      <th class="table_number">№</th>
      <th class="table_car">CAR</th>
      <th class="table_name">NAME</th>
      <th class="table_wins sort">
        <div>
          <span>WINS</span>
          <span class="table_wins-order"></span>
        </div>
      </th>
      <th class="table_time sort active-sort">
        <div>
          <span>BEST TIME (sec)</span>
          <span class="table_time-order"></span>
        </div>
      </th>
    </tr>
  </thead>
<thead class="winners_container"></thead>
  <tbody class="table_body"></tbody>
</table>`
}