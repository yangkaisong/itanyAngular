import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { DatabindComponent } from './databind/databind.component';
import { DirComponent } from './dir/dir.component';
import { DirexeComponent } from './direxe/direxe.component';
import { CommonPipeComponent } from './pipe/common-pipe/common-pipe.component';
import { PowPipe } from './pipe/pow/pow.pipe';
import { FilterPipe } from './pipe/filter/filter.pipe';
import { DataFilterPipe } from './pipe/data-filter/data-filter.pipe';
import { OrderByPipe } from './pipe/order-by/order-by.pipe';
import { ParentComponent } from './iao/parent/parent.component';
import { ChildAComponent } from './iao/child-a/child-a.component';
import { ChildBComponent } from './iao/child-b/child-b.component';
import {VoteComponent} from './homework/vote/vote.component';
import {VoteItemComponent} from './homework/vote-item/vote-item.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReativeFormComponent } from './forms/reative-form/reative-form.component';
import { MathserviceService } from './services/mathservice.service';
import { SomeComponent } from './services/some/some.component';
import { MathplusService } from './services/mathplus.service';
import { SomeServiceImplAService } from './services/someService/some-service-impl-a.service';
import { SomeServiceImplBService } from './services/someService/some-service-impl-b.service';
import {SomeService} from './services/someService/SomeService';
import { HttpComponent } from './http/http.component';
import { RegistComponent } from './route/regist/regist.component';
import { LoginComponent } from './route/login/login.component';
import { MainComponent } from './route/main/main.component';
import { AboutusComponent } from './route/aboutus/aboutus.component';
import { NotfoundComponent } from './route/notfound/notfound.component';
import { ChildComponent } from './route/child/child.component'
import { ParentRouterComponent } from './route/parent/parent.component';
import { EditComponent } from './route/edit/edit.component'
import { Gard } from './route/Gard';
import { HashLocationStrategy,LocationStrategy } from '@angular/common';
@NgModule({
    
  declarations: [
    AppComponent,
    TemplateComponent,
    DatabindComponent,
    DirComponent,
    DirexeComponent,
    CommonPipeComponent,
    PowPipe,
    FilterPipe,
    DataFilterPipe,
    OrderByPipe,
    ParentComponent,
    ChildAComponent,
    ChildBComponent,
    VoteComponent,
    VoteItemComponent,
    TemplateFormComponent,
    ReativeFormComponent,
    SomeComponent,
    HttpComponent,
    RegistComponent,
    LoginComponent,
    MainComponent,
    AboutusComponent,
    NotfoundComponent,
    ChildComponent,
    ParentRouterComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    //路由模块
    AppRoutingModule,
    // 模板式表单
    FormsModule,
    //响应式表单
    ReactiveFormsModule,
    // 对应Http服务的模块
    HttpModule,
    //处理跨域请求
    JsonpModule,
  ],
  // 配置provider
  // 写在providers中的类，可以通过构造方法注入给其他所有的组件或者service
  providers: [
    //方式1
    // MathserviceService,
    // MathplusService,
    {provide:MathserviceService,useClass:MathplusService},
    // SomeServiceImplAService,
    // SomeServiceImplBService
    // 全局的某个组件或者某个服务中，可能需要注入一个SomeService类型的对象，
    //如果需要注入该类型的对象，请使用SomeServiceImplAService的对象注入
    {provide:SomeService,useClass:SomeServiceImplBService},
    Gard,
    // 浏览器的定位策略
    {provide:LocationStrategy,useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
