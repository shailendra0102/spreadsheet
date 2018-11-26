(function() {
    angular.module('spreadsheet', [])
    .component('spreadSheet', {
        template:
            `<div>
            <button type="button" ng-click="$ctrl.addRow()">Add Row</button>
            <button type="button" ng-click="$ctrl.addColumn()">Add Column</button>
            <table>
            <tr class="column-label">
              <td></td>
              <td ng-repeat="column in $ctrl.columns">{{$ctrl.convertToChar(column)}}</td>
            </tr>
            <tr ng-repeat="row in $ctrl.rows" class="border">
              <td class="row-label">{{row}}</td>
              <td ng-repeat="column in $ctrl.columns">
                <div>
                  <input autofocus="{{row+$ctrl.convertToChar(column) == '1A'}}" ng-model="$ctrl.cells[row+$ctrl.convertToChar(column)]"></input>
                </div>
              </td>
            </tr>
          </table>
          <div>`,
        controller: function spreadSheetController() {
            this.columns = [10,11,12,13,14,15,16,17,18];
            this.rows = [1, 2, 3, 4];
            this.cells = {};
            this.convertToChar = function(number) {
                return parseInt(number).toString(36).toUpperCase();
            }
            this.addRow = function() {
                let length = this.rows.length;
                if(length <= 49) {
                    this.rows.push(this.rows[this.rows.length-1]+1);
                }
            }
            this.addColumn = function() {
                let length = this.columns.length;
                if(length <= 25) {
                    this.columns.push(this.columns[this.columns.length-1]+1);
                }
            }
        }
      });
})()