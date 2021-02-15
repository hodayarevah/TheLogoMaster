using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Web.Configuration;
using System.Data;
using System.Text;
using System.Globalization;
using ThelogoMaster.Models;


namespace ThelogoMaster.Models
{
  
        public class DBservices
        {
            public SqlDataAdapter da;
            public DataTable dt;

            public DBservices()
            {
                //
                // TODO: Add constructor logic here
                //
            }

        public int addUser(Users user)
        {

            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("DBConnectionString"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            String cStr = BuildInsertCommand(user);      // helper method to build the insert string

            cmd = CreateCommand(cStr, con);             // create the command

            try
            {
                int numEffected = cmd.ExecuteNonQuery(); // execute the command
                return numEffected;
            }
            catch (Exception ex)
            {

                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }

        }

        public string login(string[] logins)
            {

                SqlConnection con;
                SqlCommand cmd;

                try
                {
                    con = connect("DBConnectionString"); // create the connection
                }
                catch (Exception ex)
                {
                    // write to log
                    throw (ex);
                }

                String cStr = "select * from Users_LM u where u.username='" + logins[0] + "' and u.password='" + logins[1] + "'";      // helper method to build the insert string

                cmd = CreateCommand(cStr, con);             // create the command

                try
                {
                    string numEffected = (string)cmd.ExecuteScalar(); // execute the command

                    return numEffected;
                }
                catch (Exception ex)
                {
                    return "";
                    // write to log
                    throw (ex);
                }

                finally
                {
                    if (con != null)
                    {
                        // close the db connection
                        con.Close();
                    }
                }

            }
        public int insert(Logo[] logo)
        {
            int numEffected = 0;
            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("DBConnectionString"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }
            for (int i = 0; i < logo.Length; i++)
            {
                String cStr = BuildInsertCommand(logo[i]);      // helper method to build the insert string

                cmd = CreateCommand(cStr, con);             // create the command
                try
                {

                    numEffected = cmd.ExecuteNonQuery(); // execute the command

                }
                catch (Exception ex)
                {
                    throw (ex); ;
                }
            }



            if (con != null)
            {
                // close the db connection
                con.Close();
            }

            return numEffected;

        }
        public SqlConnection connect(String conString)
        {

            // read the connection string from the configuration file
            string cStr = WebConfigurationManager.ConnectionStrings[conString].ConnectionString;
            SqlConnection con = new SqlConnection(cStr);
            con.Open();
            return con;
        }

        private String BuildInsertCommand(Users user )
        {
            String command;

            StringBuilder sb = new StringBuilder();
            //use a string builder to create the dynamic string
            sb.AppendFormat("Values( '{1}', '{2}','{3}')", user.UserName, user.UserPass, user.Points);
            String prefix = "INSERT INTO Users_LM " + "(UserName, UserPass,points) ";
            command = prefix + sb.ToString();
            return command;
        }
        private String BuildInsertCommand(Logo logo)
        {
            String command;

            StringBuilder sb = new StringBuilder();
            //use a string builder to create the dynamic string
            sb.AppendFormat("Values( '{1}', '{2}')",logo.LogoName,logo.LogoImg);
            String prefix = "INSERT INTO Logo_LM " + "(LogoName, LogoImg) ";
            command = prefix + sb.ToString();
            return command;
        }



        private SqlCommand CreateCommand(String CommandSTR, SqlConnection con)
        {

            SqlCommand cmd = new SqlCommand(); // create the command object

            cmd.Connection = con;              // assign the connection to the command object

            cmd.CommandText = CommandSTR;      // can be Select, Insert, Update, Delete 

            cmd.CommandTimeout = 40;           // Time to wait for the execution' The default is 30 seconds

            cmd.CommandType = System.Data.CommandType.Text; // the type of the command, can also be stored procedure

            return cmd;
        }

    }
    }
