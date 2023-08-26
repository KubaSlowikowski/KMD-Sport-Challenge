import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { UserEffects } from "./user.effect";
import { userFeature } from "./user.reducer";

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(userFeature),
        EffectsModule.forFeature([UserEffects]),
    ],
    providers: [
    ],
})
export class UserModule {

}
