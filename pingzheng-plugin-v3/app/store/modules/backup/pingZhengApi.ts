// import {Action, getModule, Module, VuexModule} from 'vuex-module-decorators';
// import {store} from '../index';
//
// const NAME = 'PingZhengApi';
//
// @Module({dynamic: true, namespaced: true, store, name: NAME})
// class PingZhengApiModel extends VuexModule {
//     // Page loading status
//     @Action
//     public async zhaiyaoApi(loading: boolean) {
//         alert('未定义');
//     }
//     @Action
//     public async kuaiJiKeMuApi({year}) {
//         alert('未定义');
//     }
//     @Action
//     public async okApi(loading: boolean) {
//         alert('未定义');
//     }
//     @Action
//     public async backApi(loading: boolean) {
//         alert('未定义');
//     }
//
//
//
//     @Action
//     public async queryCcodeInfo({year,kuaiJiKeMuCode}: any) {
//         // let res;
//         // jquery.ajax({
//         //   type: 'post',
//         //   url: urlPath + '/subject!queryAssist',
//         //   data: params,
//         //   async: false,
//         //   success: res1 => res = res1,
//         //   error: function(xhr) {
//         //     jquery('body').html(xhr.responseText);
//         //   }
//         // });
//         // return {
//         //   then(exec) {
//         //     exec(res);
//         //   }
//         // };
//
//         const result={"list":null,"map":{},"msg":null,"msgs":null,"obj":{"bcassItem":null,"bclose":"1","bdept":"0","be":"0","bend":"1","binvName":null,"binventory":"1","bitem":"1","bperson":"1","bproperty":"1","br":"0","brelativeUnit":null,"c1":null,"c2":null,"c3":null,"c4":null,"c5":null,"c6":null,"cateId":null,"cbookType":null,"cclass":"1","ccode":"110102","ccodename":"债券","ccodepath":"短期投资\/债券","codeType":null,"id":2637,"igrade":"2","iyear":"2023","stid":"2"},"status":null}
//
//         return result.obj
//     }
// }
//
// export const pingZhengApiStore = getModule<PingZhengApiModel>(PingZhengApiModel);
