using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ThelogoMaster.Models
{
    public class Logo
    {
        int stage;
        string logoName;
        string logoImg;
        public Logo()
        {

        }
        public Logo(int stage, string logoName, string logoImg)
        {
            Stage = stage;
            LogoName = logoName;
            LogoImg = logoImg;
        }
        public Logo(string logoName, string logoImg)
        {

            LogoName = logoName;
            LogoImg = logoImg;
        }
        public int Stage { get => stage; set => stage = value; }
        public string LogoName { get => logoName; set => logoName = value; }
        public string LogoImg { get => logoImg; set => logoImg = value; }

        public static int insert(Logo[] logo)
        {
            DBservices dbs = new DBservices();
            dbs.insert(logo);
            return 0;
        }
    }
}