export function getTableTemplate() {
  return `
  <span class="page-name">Winners</span>
  <span class="car-amount">(100)</span>

  <table class="winners_table table">
  <thead>
    <tr class="table__nav">
      <th class="table_number">№</th>
      <th class="table_car">CAR</th>
      <th class="table_name">NAME</th>
      <th class="table_wins sort" data-sort="wins">
        <div class="table__wins">
          <span>WINS</span>
          <span class="table_wins_order"></span>
        </div>
      </th>
      <th class="table_time sort" data-sort="time">
        <div class="table_time">
          <span>BEST TIME (sec)</span>
          <span class="table_time_order"></span>
        </div>
      </th>
    </tr>

  </thead>
  <tbody class="table_body"></tbody>
</table>`
}