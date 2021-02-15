using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ThelogoMaster.Models
{
    public class Users
    {
    

        string userName;
        string userPass;
        int points;
        int stage;


        public Users()
        {

        }

        public Users(string userName, string userPass, int points,int stage)
        {
            this.userName = userName;
            this.userPass = userPass;
            this.points = points;
            this.stage = stage;
        }

        public string UserName { get => userName; set => userName = value; }
        public string UserPass { get => userPass; set => userPass = value; }
        public int Points { get => points; set => points = value; }

        public int Stage { get => stage; set => stage=value; }
        public int addUser()
        {
            DBservices db = new DBservices();
            return db.addUser(this);
        }
       
    }
}