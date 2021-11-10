using Phonebook.Models;
using Phonebook.Providers;
using Phonebook.Services;
using Phonebook.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Phonebook
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        public void ExecuterPrg(object sender, RoutedEventArgs e)
        {
            IDataProvider jose = new PersonProvider();
            IDataProvider sophie = new CompanyProvider();
            IEnumerable<IDataProvider> providers = new List<IDataProvider>() { jose, sophie };
            RepositoryService bertrand = new RepositoryService(providers);

            IEnumerable<Entity> results = bertrand.Search("so");

            MessageBox.Show(JsonSerializer.Serialize(results));
        }

        public void About_Click(object sender, RoutedEventArgs e)
        {
            DataContext = new AboutViewModel();
        }

        public void Contacts_Click(object sender, RoutedEventArgs e)
        {
            DataContext = new ContactsViewModel();
        }
    }
}
