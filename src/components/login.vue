<template>
    <div class="login_wrapper">
        <div class="login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                <el-form-item>
                    <h2 class="title">后台管理系统</h2>
                </el-form-item>
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="账号"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="ruleForm.password" placeholder="密码" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="submitForm('ruleForm')" type="primary">登陆</el-button>
                </el-form-item>
            </el-form>  
        </div>
        <p class="bei">京ICP备18050367号-1</p>
        <p  class ='recover'>点击恢复数据</p>
    </div>
</template>
<script>
export default{
    data(){
          return {
            ruleForm: {   //表单对象
                username: 'admin',
                password: '123456'
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        submitForm(formName){
            this.$refs[formName].validate((valid) =>{
                if(valid){
                    localStorage.setItem('ms_username',this.ruleForm.username);
                    this.$router.push('/');
                }else{
                    console.log('error submit!!');
                    return false;
                }
            })
        }
    }
}
</script>
<style scoped>
 .login_wrapper{
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
 }
 .login_wrapper .login{
    width: 460px;
    height: 340px;
    margin-top:250px;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
 }
 .login_wrapper .login .title{
    text-align: center;
    color: #505458;
 }
.el-form-item__content , .el-button{
    width:300px;
    background-color: rgb(50, 65, 87);
    border-color:rgb(50, 65, 87);
 }
.login_wrapper .login .el-form{
    margin: 30px 80px auto 80px;
 }
 .recover{
    position:absolute;
    bottom:0px; 
    cursor:pointer; 
    color:#E6A23C;
    display: none;
}
.bei{
    position:absolute;
    bottom:20px; 
    cursor:pointer; 
    color:#505458;
} 
</style>