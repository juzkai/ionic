import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';  // HttpServiceProvider 的依赖

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DirectivesModule } from '../directives/directives.module';
import { ComponentsModule } from '../components/components.module';
import { HttpServiceProvider } from '../providers/http-service/http-service';

@NgModule({
  // declarations: 数组类型的选项, 用来声明属于这个模块的指令,管道等等.
    //               然后我们就可以在这个模块中使用它们了.
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  // imports: 数组类型的选项,我们的模块需要依赖的一些其他的模块,这样做的目的使我们这个模块
  //          可以直接使用别的模块提供的一些指令,组件等等.
  imports: [
    BrowserModule,DirectivesModule,ComponentsModule,HttpModule,
    IonicModule.forRoot(MyApp,{
      mode: 'ios'
    })
  ],
  // exports: 数组类型的选项,我们这个模块需要导出的一些组件,指令,模块等;
  //          如果别的模块导入了我们这个模块,
  //          那么别的模块就可以直接使用我们在这里导出的组件,指令模块等.
  exports:[],
  // bootstrap: 数组类型选项, 指定了这个模块启动的时候应该启动的组件.当然这些组件会被自动的加入到entryComponents中去
  bootstrap: [IonicApp],
  // entryComponents: 数组类型的选项,指定一系列的组件,这些组件将会在这个模块定义的时候进行编译
  //                  Angular会为每一个组件创建一个ComponentFactory然后把它存储在ComponentFactoryResolver
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  // providers: 这个选项是一个数组,需要我们列出我们这个模块的一些需要共用的服务
  //            然后我们就可以在这个模块的各个组件中通过依赖注入使用了.
  providers: [
    StatusBar,
    SplashScreen,
    HttpServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
  // schemas: 不属于Angular的组件或者指令的元素或者属性都需要在这里进行声明.

  // id: 字符串类型的选项,模块的隐藏ID,它可以是一个名字或者一个路径;用来在getModuleFactory区别模块,如果这个属性是undefined
  //     那么这个模块将不会被注册.
})
export class AppModule {}
