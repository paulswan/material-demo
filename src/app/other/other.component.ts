import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss'],
})
export class OtherComponent {
  durationInSeconds = 5;

  constructor(private _bottomSheet: MatBottomSheet, public dialog: MatDialog, private _snackBar: MatSnackBar) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetExampleComponent);
  }

  openDialog() {
    const xxx = this.dialog.open(DialogExampleComponent);
    console.log(xxx);
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarExampleComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}

@Component({
  selector: 'bottom-sheet-example.component',
  templateUrl: './bottom-sheet-example.component.html',
})
export class BottomSheetExampleComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetExampleComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

@Component({
  selector: 'dialog-example.component',
  templateUrl: './dialog-example.component.html',
})
export class DialogExampleComponent {
  constructor() {}
}

@Component({
  selector: 'snack-bar-example.component',
  templateUrl: 'snack-bar-example.component.html',
  styles: [
    `
      .example-pizza-party {
        color: hotpink;
      }
    `,
  ],
})
export class SnackBarExampleComponent {}
