import { Injectable, ViewContainerRef,ComponentFactoryResolver} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentAdderService {

  viewRef:ViewContainerRef;
  constructor(private resolver:ComponentFactoryResolver) { }

//where to add
  setViewRef(viewRef){
    this.viewRef=viewRef;
  }
  //what to add
  addComponent(compToAdd: any): any{
    //Entry components will ahve a factory created and registered in resolver
   const factory=this.resolver.resolveComponentFactory(compToAdd);

   //Access the viewRef's Injector to inject the component
   const compRef=factory.create(this.viewRef.parentInjector);



   //insert the hostview of the component
   this.viewRef.insert(compRef.hostView);
   //console.log(compRef);
   //console.log(compRef.hostView);
   return compRef;
 console.log(this.viewRef.injector);


  }

  remove()
  {
    this.viewRef.detach();
  }
}
