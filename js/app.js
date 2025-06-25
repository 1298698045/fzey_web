var isMobile = false;
let width = document.body.clientWidth || document.documentElement.clientWidth;
if (width <= 750) {
  isMobile = true;
}
var mixin = {
  data: function () {
    return {
      isArticle: false,
      hasRoute: this.hasOwnProperty("$route"),
      selectMenu: "",
      isGotop: false,
      qrCodeIdx: 0,
      isTop: false, // 是否在页面顶部
      isFixed: false,
      isHeader: false,
      prevText: isMobile ? "" : "上一页",
      nextText: isMobile ? "" : "下一页",
      layout: isMobile ? "prev, pager, next" : "prev, pager, next, jumper",
      height: "",
    };
  },
  computed: {
    activeMenu: function () {
      return this.selectMenu || this.typePath;
    },
  },
  mounted: function () {
    window.addEventListener("scroll", this.handleIsScroll, true);
    window.addEventListener("scroll", this.handleSroll);
    var that = this;
    // window.addEventListener("input",function(event){
    //   var newval = event.target.value;
    //   newval = that.validateInput(newval);
    //   event.target.value = newval;
    // })
    var dom = document.querySelector(".search_icon");
    dom.addEventListener("click", function(event){
      var inputField = document.getElementById('fullText'); 
      if (!that.validateInput(inputField.value)) {  
          alert('输入包含禁止的SQL关键字或符号！');  
          event.preventDefault(); // 阻止表单提交  
      } else {
        document.getElementById('searchDataForm1').submit();
      }
    })
    document.getElementById("searchDataForm1").addEventListener("submit", function(event){
      var inputField = document.getElementById('fullText'); 
      if (!that.validateInput(inputField.value)) {  
          alert('输入包含禁止的SQL关键字或符号！');  
          event.preventDefault(); // 阻止表单提交  
      }
    })
  },
  methods: {
    // functionAntiSqlValid: function(){
    //  var re = /select|update|delete|exec|count|'|"|=|;|>|<|%/i; 
    //  if( re.test(oField.value) ) {
    //   oField.value ="http://blog.soso.com/qz.q/";
    //   oField.className="errInfo"; 
    //   oField.focus(); 
    //   return false;
    //  }
    // },
    // validateInput: function(event){
    //   var inputValue = event;
    //   const regex = /^[\u4e00-\u9fa5a-zA-Z0-9\s,.!?]*$/; // 允许中文、英文、数字和常用符号
    //   if (!regex.test(event)) {
    //     inputValue = event.replace(/[^\u4e00-\u9fa5a-zA-Z0-9\s,.!?]/g, '');
    //   }
    //   return inputValue;
    // },
      validateInput:function (inputValue) {  
        // 定义禁止的SQL关键字和符号  
        const forbiddenWords = ['SELECT', 'UPDATE', 'DELETE', 'INSERT', 'DROP'];  
        const forbiddenSymbols = [';', '--', '/*', '*/', '=', '>', '<', "'", '"', '`', '\\', '(', ')', '|', '&', '$', '#', '@', '%', '^', '*', '+', ',', '-', '_', '~', '[', ']', '{', '}', '.', '!', '?', '/', '\\\\'];  
      
        // 将输入转换为大写以进行不区分大小写的比较  
        const upperInput = inputValue.toUpperCase();  
      
        // 检查是否包含任何禁止的SQL关键字  
        if (forbiddenWords.some(word => upperInput.includes(word))) {  
            return false;  
        }  
      
        // 检查是否包含任何禁止的符号  
        if (forbiddenSymbols.some(symbol => upperInput.includes(symbol))) {  
            return false;  
        }  
      
        // 如果没有发现任何问题，则返回true  
        return true;  
    },
    push: function (path) {
      router.push({ path: path });
    },
    gotoHref: function (url) {
      location.href = url;
      this.isHeader = false;
    },
    goto: function (url) {
      const href = window.location.href;
      window.open(url);
      setTimeout(()=>{
        window.location.href = href;
      },300)
      this.isHeader = false;
    },
    onMenuMouseOver: function (menu) {
      this.selectMenu = menu;
    },
    onMenuMouseLeave: function () {
      this.selectMenu = "";
    },
    handleTabQrCode: function (idx) {
      this.qrCodeIdx = idx;
    },
    handleIsScroll: function () {
      let scrolltop =
        document.documentElement.scrollTop || document.body.scrollTop;
      scrolltop > 500 ? (this.isTop = true) : (this.isTop = false);
    },
    toTop: function () {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(function () {
        document.body.scrollTop =
          document.documentElement.scrollTop =
          top -=
            50;
        if (top <= 0) {
          this.isTop = true;
          clearInterval(timeTop);
        } else {
          this.isTop = false;
        }
      }, 10);
    },
    handleSroll: function (e) {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      if (top >= 140) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
    handleOpen: function () {
      this.$refs.childModal.dialogVisible = true;
    },
    dateFormat: function (date, fmt = "YYYY-MM-DD") {
      return moment(date).format(fmt);
    },
    // 导航开关
    handleNavOpen() {
      this.isHeader = !this.isHeader;
      if (this.isHeader) {
        this.$nextTick(() => {
          this.height = document.documentElement.clientHeight - 66;
          document.body.style.overflow = "hidden";
        });
      } else {
        this.$nextTick(() => {
          this.height = 0;
          document.body.style.overflow = "auto";
        });
      }
    },
    getSimpleText(html) {
      var re1 = new RegExp("<.+?>", "g"); //匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
      var msg = html.replace(re1, ""); //执行替换成空字符
      return msg;
    }
  },
};
window.onload = function(){
  var meta = document.createElement('meta');
  meta.setAttribute('http-equiv', 'Content-Security-Policy');
  meta.setAttribute('content', "form-action 'self';");
  document.head.appendChild(meta);
  // var script = document.createElement('script');
  // script.innerHTML = 'document.cookie = "app_shell_visited=1;path=/;max-age=5";location.replace(location.href.split("#")[0]);'
  // script.setAttribute("nonce","SG0bV9rOanQfzG0ccU8WQw==");
  // document.body.appendChild(script);
}
// const Modal =
// Vue.extend({
//     template: `
//         <el-dialog
//         title="试用申请咨询"
//         :visible.sync="dialogVisible"
//         width="440px"
//         :before-close="handleClose">
//         <div class="modalContent">
//             <div class="desc">完善以下信息您可以免费体验我们的产品功能，我们的顾问会在 1个工作日内与您取得联系</div>
//             <el-form ref="form" :rules="rules" :model="modalForm" label-width="80px">
//                 <el-form-item required class="form_item" size="mini" label="单位名称" prop="unitName">
//                     <el-input v-model="modalForm.unitName"></el-input>
//                 </el-form-item>
//                 <el-form-item required class="form_item" size="mini" label="姓名" prop="name">
//                     <el-input v-model="modalForm.name"></el-input>
//                 </el-form-item>
//                 <el-form-item required class="form_item" size="mini" label="手机号" prop="phone">
//                     <el-input v-model="modalForm.phone"></el-input>
//                 </el-form-item>
//             </el-form>
//         </div>
//         <span slot="footer" class="dialog-footer">
//             <el-button class="submitBtn" type="primary" @click="dialogVisible = false">提交申请</el-button>
//         </span>
//     </el-dialog>
//     `,
//     data(){
//         return {
//             dialogVisible:false,
//             modalForm:{
//                 unitName: '',
//                 name: '',
//                 phone: ''
//             },
//             rules:{
//                 unitName:[
//                     { required: true, message: '请输入单位名称', trigger: 'blur' }
//                 ],
//                 name:[
//                     { required: true, message: '请输入姓名', trigger: 'blur' }
//                 ],
//                 phone:[
//                     { required: true, message: '请输入电话', trigger: 'blur' }
//                 ]
//             }
//         }
//     },
//     methods:{
//         handleClose(){
//             this.dialogVisible = false;
//         },
//         // 弹框
//         handleClose(){
//             this.dialogVisible = false;
//         }
//     }
// })
